// src/applications.ts

import express, { Request, Response } from "express";
import mongoose, { Schema, Document } from "mongoose";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import { authMiddleware } from "./middleware/auth"; // Assumes you have auth middleware implemented
// Optional: import sendEmail from "./utils/sendEmail";

dotenv.config();

// ---------------------------------------------------------------------
// 1. Application Model and Schema Setup
// ---------------------------------------------------------------------

// Define an interface for the Interview subdocument
export interface Interview {
  scheduledAt?: Date;
  status?: "Pending" | "Completed" | "Cancelled";
}

// Define an interface for the Application document
export interface ApplicationDocument extends Document {
  user: mongoose.Types.ObjectId;
  essay: string;
  transcript?: string;
  attachments?: string[]; // Array of file URLs/paths
  status:
    | "Draft"
    | "Submitted"
    | "Under Review"
    | "Interview Scheduled"
    | "Accepted"
    | "Rejected";
  interview?: Interview;
  createdAt: Date;
  updatedAt: Date;
}

// Create a schema for the Interview subdocument
const InterviewSchema: Schema = new Schema({
  scheduledAt: { type: Date },
  status: { type: String, enum: ["Pending", "Completed", "Cancelled"] },
});

// Create the main Application schema
const ApplicationSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    essay: { type: String, required: true },
    transcript: { type: String }, // URL or file path for the transcript
    attachments: [{ type: String }], // Additional file attachments
    status: {
      type: String,
      enum: [
        "Draft",
        "Submitted",
        "Under Review",
        "Interview Scheduled",
        "Accepted",
        "Rejected",
      ],
      default: "Draft",
    },
    interview: { type: InterviewSchema },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  },
);

const Application = mongoose.model<ApplicationDocument>(
  "Application",
  ApplicationSchema,
);

// ---------------------------------------------------------------------
// 2. Multer File Upload Middleware Setup
// ---------------------------------------------------------------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB file size limit
  fileFilter: (req, file, cb) => {
    // Allow only specific file types (PDFs, DOCs, images)
    const filetypes = /pdf|doc|docx|jpg|jpeg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error("Error: File type not allowed!"));
  },
});

// ---------------------------------------------------------------------
// 3. Application Routes
// ---------------------------------------------------------------------
const router = express.Router();

// POST /applications - Create a new application with file upload for transcript
router.post(
  "/",
  authMiddleware,
  upload.single("transcriptFile"),
  async (req: Request, res: Response) => {
    try {
      const { essay, attachments } = req.body;
      const transcript = req.file ? req.file.path : undefined;
      // Parse attachments if provided as a JSON string (optional)
      const parsedAttachments = attachments ? JSON.parse(attachments) : [];
      const newApplication = await Application.create({
        user: req.user.id, // Assumes auth middleware sets req.user
        essay,
        transcript,
        attachments: parsedAttachments,
        status: "Draft",
      });
      // Optionally, send a notification email here
      // await sendEmail({ to: req.user.email, subject: "Application Received", text: "Your application has been created." });
      return res.status(201).json(newApplication);
    } catch (error) {
      console.error("Error creating application:", error);
      return res.status(500).json({ error: "Failed to create application" });
    }
  },
);

// GET /applications - Retrieve all applications for the authenticated user
router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const applications = await Application.find({ user: req.user.id });
    return res.status(200).json(applications);
  } catch (error) {
    console.error("Error retrieving applications:", error);
    return res.status(500).json({ error: "Failed to retrieve applications" });
  }
});

// PUT /applications/:id - Update an application (e.g., update essay, change status)
router.put("/:id", authMiddleware, async (req: Request, res: Response) => {
  try {
    const updatedApplication = await Application.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { $set: req.body },
      { new: true },
    );
    if (!updatedApplication) {
      return res.status(404).json({ error: "Application not found" });
    }
    return res.status(200).json(updatedApplication);
  } catch (error) {
    console.error("Error updating application:", error);
    return res.status(500).json({ error: "Failed to update application" });
  }
});

// PUT /applications/:id/interview - Update interview details for an application
router.put(
  "/:id/interview",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { scheduledAt, status } = req.body;
      const updatedApplication = await Application.findOneAndUpdate(
        { _id: req.params.id, user: req.user.id },
        { $set: { interview: { scheduledAt, status } } },
        { new: true },
      );
      if (!updatedApplication) {
        return res.status(404).json({ error: "Application not found" });
      }
      return res.status(200).json(updatedApplication);
    } catch (error) {
      console.error("Error updating interview information:", error);
      return res
        .status(500)
        .json({ error: "Failed to update interview information" });
    }
  },
);

// Export the router to be used in your main app file
export default router;

// ---------------------------------------------------------------------
// 4. Express App Setup for Standalone Testing (Optional)
// ---------------------------------------------------------------------
if (require.main === module) {
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(express.json());
  app.use("/applications", router);

  mongoose
    .connect(process.env.MONGO_URI || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions)
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("MongoDB connection error:", err));
}

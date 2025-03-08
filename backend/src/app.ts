// src/app.ts

import express, { Request, Response } from "express";
import mongoose, { Schema, Document, model, Types } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";

// Import existing routes
import authRoutes from "./routes/auth";
import protectedRoutes from "./routes/someProtectedRoute"; // Protected routes (authentication & role-based)
import profileRoutes from "./routes/profile"; // User management / profile endpoints
import threadRoutes from "./routes/Threads"; // Forum Threads endpoints
import postRoutes from "./routes/posts"; // Forum posts endpoints

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string, {
    // Additional options can be added here if needed
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// A simple test route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to CoSprout Backend :)");
});

// ---------------------------------------------------------------------
// Application Model, Multer Setup, and Routes
// ---------------------------------------------------------------------

// =====================
// 1. Application Model
// =====================

// Define an interface for the Interview subdocument
interface Interview {
  scheduledAt?: Date;
  status?: "Pending" | "Completed" | "Cancelled";
}

// Define an interface for the Application document
interface ApplicationDocument extends Document {
  user: Types.ObjectId;
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

const Application = model<ApplicationDocument>(
  "Application",
  ApplicationSchema,
);

// =====================
// 2. Multer Middleware for File Uploads
// =====================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure the 'uploads' folder exists in your project root
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5 MB
  fileFilter: (req, file, cb) => {
    // Allow only specific file types (e.g., PDFs, DOCs, images)
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

// =====================
// 3. Application Routes
// =====================

// Dummy auth middleware for demonstration purposes
// Replace with your actual auth middleware that sets req.user
const authMiddleware = (req: Request, res: Response, next: Function) => {
  // For testing purposes, we're setting a dummy user.
  // In production, ensure req.user is populated after proper authentication.
  (req as any).user = { id: "dummyUserId", email: "user@example.com" };
  next();
};

const applicationRouter = express.Router();

// POST /api/applications - Create a new application with transcript file upload
applicationRouter.post(
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
        user: (req as any).user.id,
        essay,
        transcript,
        attachments: parsedAttachments,
        status: "Draft",
      });
      // Optionally, send a notification email here using your sendEmail utility
      return res.status(201).json(newApplication);
    } catch (error) {
      console.error("Error creating application:", error);
      return res.status(500).json({ error: "Failed to create application" });
    }
  },
);

// GET /api/applications - Retrieve all applications for the authenticated user
applicationRouter.get(
  "/",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const applications = await Application.find({
        user: (req as any).user.id,
      });
      return res.status(200).json(applications);
    } catch (error) {
      console.error("Error retrieving applications:", error);
      return res.status(500).json({ error: "Failed to retrieve applications" });
    }
  },
);

// PUT /api/applications/:id - Update an application (e.g., update essay or status)
applicationRouter.put(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const updatedApplication = await Application.findOneAndUpdate(
        { _id: req.params.id, user: (req as any).user.id },
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
  },
);

// PUT /api/applications/:id/interview - Update interview details for an application
applicationRouter.put(
  "/:id/interview",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { scheduledAt, status } = req.body;
      const updatedApplication = await Application.findOneAndUpdate(
        { _id: req.params.id, user: (req as any).user.id },
        { $set: { interview: { scheduledAt, status } } },
        { new: true },
      );
      if (!updatedApplication) {
        return res.status(404).json({ error: "Application not found" });
      }
      return res.status(200).json(updatedApplication);
    } catch (error) {
      console.error("Error updating interview details:", error);
      return res
        .status(500)
        .json({ error: "Failed to update interview details" });
    }
  },
);

// Mount the Application routes under /api/applications
app.use("/api/applications", applicationRouter);

// ---------------------------------------------------------------------
// Mount existing routes from other parts of your application
// ---------------------------------------------------------------------

// Public routes: authentication endpoints
app.use("/api/auth", authRoutes);

// Protected routes: routes that require a valid token and proper role-based authorization
app.use("/api/protected", protectedRoutes);

// Profile endpoints: user management endpoints (protected by auth middleware)
app.use("/api/profile", profileRoutes);

// Forum endpoints:
// - Threads: For creating and listing discussion threads
app.use("/api/threads", threadRoutes);
// - Posts: For creating and listing posts (replies) in threads
app.use("/api/posts", postRoutes);

// ---------------------------------------------------------------------
// Start the server
// ---------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

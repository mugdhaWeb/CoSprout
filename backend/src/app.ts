// src/app.ts

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import protectedRoutes from "./routes/someProtectedRoute"; // Protected routes (authentication & role-based)
import profileRoutes from "./routes/profile"; // User management / profile endpoints
import threadRoutes from "./routes/Threads"; // Forum Threads endpoints
import postRoutes from "./routes/posts"; // Forum posts endpoints

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string, {
    // Additional options if needed
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// A simple route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to CoSprout Backend :)");
});

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

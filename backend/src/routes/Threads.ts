// src/routes/threads.ts
import { Router, Request, Response } from "express";
import auth, { AuthRequest } from "../middleware/auth";
import Thread from "../models/Thread";

const router = Router();

/**
 * @route   GET /api/threads
 * @desc    Get all threads (optionally, filter by category)
 * @access  Public
 */
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const threads = await Thread.find().populate("createdBy", "email");
    res.json(threads);
  } catch (err) {
    console.error("Error fetching threads:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   POST /api/threads
 * @desc    Create a new thread
 * @access  Private (requires token)
 */
router.post("/", auth, async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, category } = req.body;
    const newThread = new Thread({
      title,
      description,
      category,
      createdBy: (req as AuthRequest).user.id,
    });
    const savedThread = await newThread.save();
    res.status(201).json(savedThread);
  } catch (err) {
    console.error("Error creating thread:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

// src/routes/posts.ts
import { Router, Request, Response } from "express";
import auth, { AuthRequest } from "../middleware/auth";
import Post from "../models/Post";

const router = Router();

/**
 * @route   GET /api/posts/:threadId
 * @desc    Get all posts for a given thread
 * @access  Public
 */
router.get("/:threadId", async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.find({ thread: req.params.threadId })
      .populate("createdBy", "email")
      .sort({ createdAt: 1 });
    res.json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   POST /api/posts/:threadId
 * @desc    Create a new post in a thread
 * @access  Private (requires token)
 */
router.post(
  "/:threadId",
  auth,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { content } = req.body;
      const newPost = new Post({
        thread: req.params.threadId,
        content,
        createdBy: (req as AuthRequest).user.id,
      });
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (err) {
      console.error("Error creating post:", err);
      res.status(500).json({ message: "Server error" });
    }
  },
);

export default router;

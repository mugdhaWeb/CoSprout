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

/**
 * @route   PUT /api/posts/:postId
 * @desc    Edit an existing post
 * @access  Private (only the creator or an admin can edit)
 */
router.put(
  "/:postId",
  auth,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { postId } = req.params;
      const { content } = req.body;
      const userId = (req as AuthRequest).user.id;

      // Find the post by its ID
      const post = await Post.findById(postId);
      if (!post) {
        res.status(404).json({ message: "Post not found." });
        return;
      }

      // Authorization check: Only the post creator or an admin can edit
      if (
        (post.createdBy as any).toString() !== userId &&
        (req as AuthRequest).user.role !== "admin"
      ) {
        res.status(403).json({ message: "Unauthorized to edit this post." });
        return;
      }

      // Update the post content
      post.content = content;
      const updatedPost = await post.save();
      res.json(updatedPost);
    } catch (err) {
      console.error("Error editing post:", err);
      res.status(500).json({ message: "Server error." });
    }
  },
);

/**
 * @route   DELETE /api/posts/:postId
 * @desc    Delete an existing post
 * @access  Private (only the creator or an admin can delete)
 */
router.delete(
  "/:postId",
  auth,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { postId } = req.params;
      console.log("my post id is ", postId);
      const userId = (req as AuthRequest).user.id;

      // Find the post by its ID
      const post = await Post.findById(postId);
      if (!post) {
        res.status(404).json({ message: "Post not found." });
        return;
      }

      // Authorization check: Only the post creator or an admin can delete
      if (
        (post.createdBy as any).toString() !== userId &&
        (req as AuthRequest).user.role !== "admin"
      ) {
        res.status(403).json({ message: "Unauthorized to delete this post." });
        return;
      }

      // Use deleteOne() instead of remove()
      await post.deleteOne();
      res.json({ message: "Post deleted successfully." });
    } catch (err) {
      console.error("Error deleting post:", err);
      res.status(500).json({ message: "Server error." });
    }
  },
);

export default router;

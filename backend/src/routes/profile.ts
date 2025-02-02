// src/routes/profile.ts

import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import auth, { AuthRequest } from "../middleware/auth";
import User from "../models/User";

const router = Router();

/**
 * @route   GET /api/profile/me
 * @desc    Get current user's profile
 * @access  Private (requires token)
 */
router.get("/me", auth, async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract user ID from the authenticated user (attached by auth middleware)
    const userId = (req as AuthRequest).user.id;
    // Retrieve the user from the database excluding the password field
    const user = await User.findById(userId).select("-password");
    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }
    res.json(user);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ message: "Server error." });
  }
});

/**
 * @route   PUT /api/profile/me
 * @desc    Update current user's profile
 * @access  Private (requires token)
 */
router.put(
  "/me",
  auth,
  // Validation middleware: if email or category are provided, validate them
  [
    body("email")
      .optional()
      .isEmail()
      .withMessage("Please provide a valid email address."),
    body("category")
      .optional()
      .isString()
      .withMessage("Category must be a string."),
  ],
  async (req: Request, res: Response): Promise<void> => {
    // Check for validation errors from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    try {
      const userId = (req as AuthRequest).user.id;
      // Extract only the fields allowed for update
      const { email, category } = req.body;

      // Check if any valid data was provided
      if (!email && !category) {
        res.status(400).json({ message: "No data provided for update." });
        return;
      }

      // Update the user document; { new: true } returns the updated document
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { email, category },
        { new: true, runValidators: true },
      ).select("-password");

      res.json(updatedUser);
    } catch (err) {
      console.error("Error updating profile:", err);
      res.status(500).json({ message: "Server error." });
    }
  },
);

export default router;

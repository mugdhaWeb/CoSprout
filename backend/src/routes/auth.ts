// src/routes/auth.ts

import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET as string;

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", async (req: Request, res: Response): Promise<void> => {
  const { email, password, role, category } = req.body;
  console.log(email, password, role);

  // Basic validation
  if (!email || !password || !role || !category) {
    res.status(400).json({ message: "Please enter all required fields." });
    return;
  }

  try {
    // Check if the user already exists
    const existingUser: IUser | null = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists." });
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user
    const newUser = new User({
      email,
      password: hashedPassword,
      role,
      category,
    });

    await newUser.save();

    // Create a JWT token
    const payload = { id: newUser._id, role: newUser.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
        category: newUser.category,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during registration." });
  }
});

// @route   POST /api/auth/login
// @desc    Login user and return token
// @access  Public
router.post("/login", async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    res.status(400).json({ message: "Please provide email and password." });
  }

  try {
    // Find user by email
    const user: IUser | null = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials." });
      return;
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials." });
    }

    // Create and return JWT token
    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        category: user.category,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login." });
  }
});

export default router;

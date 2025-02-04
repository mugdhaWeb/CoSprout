// src/routes/auth.ts

import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import User, { IUser } from "../models/User";
import dotenv from "dotenv";
// Optionally import your email-sending utility
import { sendVerificationEmail } from "../utils/sendEmail"; // Implement this utility as needed

dotenv.config();

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET as string;
const VERIFICATION_EXPIRES_IN_MS = 3600000; // 1 hour

// @route   POST /api/auth/register
// @desc    Register a new user and send a verification email
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

        // Generate verification token and expiration
        const verificationToken = crypto.randomBytes(32).toString("hex");
        const verificationTokenExpires = new Date(
            Date.now() + VERIFICATION_EXPIRES_IN_MS
        );

        // Create the new user with verification fields
        const newUser = new User({
            email,
            password: hashedPassword,
            role,
            category,
            isVerified: false, // Email is not verified yet
            verificationToken,
            verificationTokenExpires,
        });

        await newUser.save();

        // Optionally, send a verification email
        // Construct a verification URL using your BASE_URL (e.g., http://localhost:5001)
        // Example: http://localhost:5001/api/auth/verify-email?token=<verificationToken>
        await sendVerificationEmail(email, verificationToken);

        res.status(201).json({
            message:
                "User registered. Please check your email for verification instructions.",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error during registration." });
    }
});

// @route   POST /api/auth/login
// @desc    Login user and return token (only if email is verified)
// @access  Public
router.post("/login", async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        res.status(400).json({ message: "Please provide email and password." });
        return;
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
            return;
        }

        // Check if email is verified
        if (!user.isVerified) {
            res.status(401).json({
                message: "Please verify your email address before logging in.",
            });
            return;
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

// @route   GET /api/auth/verify-email
// @desc    Verify user's email address using a token
// @access  Public
router.get(
    "/verify-email",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const { token } = req.query;
            if (!token || typeof token !== "string") {
                res.status(400).json({ message: "Invalid or missing token." });
                return;
            }

            // Find the user with a matching verification token that hasn't expired
            const user = await User.findOne({
                verificationToken: token,
                verificationTokenExpires: { $gt: new Date() },
            });

            if (!user) {
                res.status(400).json({
                    message: "Invalid or expired verification token.",
                });
                return;
            }

            // Mark the email as verified and clear the token fields
            user.isVerified = true;
            user.verificationToken = undefined;
            user.verificationTokenExpires = undefined;
            await user.save();

            res.json({ message: "Email verified successfully." });
        } catch (err) {
            console.error("Email verification error:", err);
            res.status(500).json({
                message: "Server error during email verification.",
            });
        }
    }
);

export default router;

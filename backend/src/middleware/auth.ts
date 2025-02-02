// src/middleware/auth.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface AuthRequest extends Request {
  user?: any;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

export default function auth(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): void {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    res.status(401).json({ message: "No token, authorization denied." });
    return; // Explicitly return nothing
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded payload (e.g., user id and role) to the request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid." });
    return;
  }
}

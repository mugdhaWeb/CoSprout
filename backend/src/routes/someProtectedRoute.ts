// src/routes/someProtectedRoute.ts

import { Router, Request, Response } from "express";
import auth from "../middleware/auth";
import { requireRole } from "../middleware/authorization"; // Assuming you have this middleware implemented

const router = Router();

// Protected route (authentication only)
router.get("/protected", auth, (req: Request, res: Response): void => {
  res.json({
    message: "You have accessed a protected route!",
    user: (req as any).user, // Type assertion; consider refining your types later
  });
});

// Route accessible only to users with the "mentor" role
router.get(
  "/mentor-only",
  auth,
  requireRole("mentor"),
  (req: Request, res: Response): void => {
    res.json({
      message: "Hello mentor, you have access to this route!",
      user: (req as any).user,
    });
  },
);

// Route accessible to users with either "mentor" or "both" roles
router.get(
  "/mentor-or-both",
  auth,
  requireRole(["mentor", "both"]),
  (req: Request, res: Response): void => {
    res.json({
      message: "Hello, you have the proper role to access this route!",
      user: (req as any).user,
    });
  },
);

export default router;

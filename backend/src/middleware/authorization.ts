// src/middleware/authorization.ts

import { Request, Response, NextFunction } from "express";

// Extend the Request interface to ensure we have a 'user' property.
// You may already have this interface in your auth.ts. If so, import it instead.
export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: "mentee" | "mentor" | "both"; // adjust based on your roles
    // ... any other properties you attach to the token
  };
}

/**
 * Middleware to require that the user has one of the allowed roles.
 * @param allowedRoles A role or array of roles that are allowed access.
 */
export const requireRole = (
  allowedRoles:
    | "mentee"
    | "mentor"
    | "both"
    | Array<"mentee" | "mentor" | "both">,
) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    // Ensure the user is authenticated (should have been set by your auth middleware)
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized: No user found." });
      return;
    }

    const userRole = req.user.role;

    // Check if allowedRoles is an array; if not, convert it to one
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

    // If the user's role is not in the allowed roles, deny access.
    if (!roles.includes(userRole)) {
      res.status(403).json({ message: "Access denied: Insufficient role." });
      return;
    }

    // User has one of the required roles; proceed to the next middleware or route handler.
    next();
  };
};

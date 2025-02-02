import { Router, Request, Response } from "express";
import auth from "../middleware/auth";

const router = Router();

router.get("/protected", auth, (req: Request, res: Response) => {
  res.json({
    message: "You have accessed a protected route!",
    user: (req as any).user,
  });
});

export default router;

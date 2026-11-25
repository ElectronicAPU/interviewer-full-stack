import { Router } from "express";
import type { Request, Response } from "express";
import userRoutes from "./user.routes.js"

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ ok: true });
});

router.use(userRoutes)

export default router
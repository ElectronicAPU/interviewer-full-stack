import type { Response } from "express";
import { ResultTypes } from "../types/result.types";

export function sendResult(res: Response, result: ResultTypes) {
  if (!result.ok) {
    res.status(result.status).json({ error: result.error });
  }
  res.json(result.data);
}

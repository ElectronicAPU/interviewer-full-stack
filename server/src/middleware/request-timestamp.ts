import type { NextFunction, Request, Response } from "express";

export function requestTimestamp(req:Request, res:Response, next: NextFunction) {
const timestamp = new Date().toISOString()
console.log(`[${timestamp}] ${req.method} ${req.url}`);
next()
}
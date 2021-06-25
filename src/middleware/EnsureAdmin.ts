import { Request, Response, NextFunction, response } from "express";

export function EnsureAdmin(req: Request, res: Response, next: NextFunction) {
  const isAdmin = true;

  if (isAdmin) return next();
  return res.status(401).json({
    error: "Unauthorized",
  });
}

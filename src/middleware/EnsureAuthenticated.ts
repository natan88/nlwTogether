import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function EnsureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).end();
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;
    request.user_id = sub;
    next();
  } catch (error) {
    return response.status(401).json(error);
  }
}

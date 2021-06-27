import { Request, Response, NextFunction, response } from "express";
import { UserRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

export async function EnsureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;
  const usersRepository = getCustomRepository(UserRepositories);
  const { admin } = await usersRepository.findOne(user_id);

  if (admin) return next();
  return response.status(401).json({
    error: "Unauthorized"
  });
}

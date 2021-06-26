import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";
import { IResponseSuccess } from "../util/IResponse";

class CreateUserController {
  async handle(request: Request, response: Response<IResponseSuccess>) {
    const { name, email, password, admin } = request.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
      admin,
    });

    return response.status(201).json({
      success: true,
      statusCode: 201,
      payload: user,
    });
  }
}

export { CreateUserController };

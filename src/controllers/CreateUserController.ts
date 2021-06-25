import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";
import { IResponseSuccess, IResponse } from "../util/IResponse";

class CreateUserController {
  async handle(request: Request, response: Response<IResponse>) {
    const { name, email, admin } = request.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, admin });

    return response.status(201).json({
      success: true,
      statusCode: 200,
      payload: user,
    });
  }
}

export { CreateUserController };

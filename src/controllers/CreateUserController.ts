import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;
    const createUserService = new CreateUserService();

    createUserService
      .execute({ name, email, admin })
      .then((user) => {
        return response.status(201).json({
          success: true,
          statusCode: 201,
          payload: user,
        });
      })
      .catch((error) => {
        response.status(400).json({
          success: true,
          statusCode: 400,
          message: "Erro ao processar sua solicitação",
          error: error,
        });
      });
  }
}

export { CreateUserController };

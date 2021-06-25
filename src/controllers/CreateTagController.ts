import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";
import { IResponseSuccess } from "../util/IResponse";

export class CreateTagController {
  async handle(request: Request, response: Response<IResponseSuccess>) {
    const { name } = request.body;

    const createTagService = new CreateTagService();
    const tag = await createTagService.execute(name);
    return response.status(201).json({
      success: true,
      statusCode: 201,
      payload: tag,
    });
  }
}

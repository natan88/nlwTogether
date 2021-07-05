import { Request, Response } from "express";
import { ListComplimentsByUserService } from "../services/ListComplimentsByUserService";
import { IListComplimentsByUserAction } from "../repositories/ComplimentRepositories";

export class ListComplimentsByUserController {
  async handle(request: Request, response: Response) {
    //const { action } = request.query;
    const { user_id } = request.params;
    const complimentService = new ListComplimentsByUserService();

    const compliments = await complimentService.execute(user_id);

    return response.json({
      success: true,
      payload: compliments
    });
  }
}

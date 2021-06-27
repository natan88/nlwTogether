import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

export class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { body } = request;
    const { user_id } = request;
    body.user_sender = user_id;

    const complimentService = new CreateComplimentService();
    const compliment = await complimentService.execute(body);
    return response.status(201).json(compliment);
  }
}

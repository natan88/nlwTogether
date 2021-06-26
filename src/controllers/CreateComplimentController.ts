import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

export class CreateComplimentController {
  async handle(request: Request, response: Response) {
    //const { tag_id, user_receiver, user_sender, message } = request.body;
    const { body } = request;

    const complimentService = new CreateComplimentService();
    const compliment = await complimentService.execute(body);
    return response.status(201).json(compliment);
  }
}

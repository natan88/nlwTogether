import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import {
  ComplimentRepositories,
  IListComplimentsByUserAction
} from "../repositories/ComplimentRepositories";

export class ListComplimentsByUserService {
  async execute(userId: string, action?: IListComplimentsByUserAction) {
    const complimentsRepositories = getCustomRepository(ComplimentRepositories);

    const compliments = await complimentsRepositories.listComplimentsByUser(
      userId,
      action
    );

    return compliments;
  }
}

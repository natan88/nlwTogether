import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";
@EntityRepository(Compliment)
export class ComplimentRepositories extends Repository<Compliment> {
  async listComplimentsByUser(
    userId: string,
    action?: IListComplimentsByUserAction
  ) {
    const compliments = await this.createQueryBuilder()
      .where("compliment.user_receive = :id OR compliment.user_send = :id", {
        id: userId
      })
      .getMany();
    console.log("Result: ", compliments);

    return compliments;
  }
}
export interface IListComplimentsByUserAction {
  action: "sender" | "receiver" | "both";
}

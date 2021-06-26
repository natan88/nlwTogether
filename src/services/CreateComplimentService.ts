import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";
import { UserRepositories } from "../repositories/UserRepositories";
import { ResponseError } from "../util/ResponseError";

export class CreateComplimentService {
  async execute(complimentData: IComplimentRequest) {
    const complimentRepositories = getCustomRepository(ComplimentRepositories);
    const userRepositories = getCustomRepository(UserRepositories);

    if (complimentData.user_receiver === complimentData.user_sender) {
      throw new ResponseError(
        "The user cannot praise himself",
        400,
        "BAD_REQUEST:SELF_PRAISE_NOT_PERMITTED"
      );
    }

    const userReceiverExists = userRepositories.findOne(
      complimentData.user_receiver
    );
    if (!userReceiverExists) {
      throw new ResponseError(
        "User Receiver does not exists!",
        400,
        "BAD_REQUEST:USER_RECEIVER_DOES_NOT_EXISTS"
      );
    }

    const compliment = complimentRepositories.create(complimentData);
    await complimentRepositories.save(compliment);
    return compliment;
  }
}

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

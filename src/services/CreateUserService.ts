import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { ResponseError } from "../util/ResponseError";
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      /*       throw new ResponseError(
        "Email incorrect",
        400,
        "BAD_REQUEST:PARAMS_INVALID"
      ); */
      throw new Error("mail incorrect");
    }

    const userAlReadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlReadyExists) {
      /*       throw new ResponseError(
        "User already exists",
        400,
        "BAD_REQUEST:USER_DUPLICATE"
      ); */
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };

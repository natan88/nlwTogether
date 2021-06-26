import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { ResponseError } from "../util/ResponseError";
import { hash } from "bcryptjs";
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password, admin = false }: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories);

    if (!email) {
      /*       throw new ResponseError(
        "Email incorrect",
        400,
        "BAD_REQUEST:PARAMS_INVALID"
      ); */
      throw new Error("mail incorrect");
    }

    const userAlReadyExists = await usersRepository.findOne({
      email
    });

    if (userAlReadyExists) {
      /*       throw new ResponseError(
        "User already exists",
        400,
        "BAD_REQUEST:USER_DUPLICATE"
      ); */
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    });

    await usersRepository.save(user);

    user.password = undefined;

    return user;
  }
}

export { CreateUserService };

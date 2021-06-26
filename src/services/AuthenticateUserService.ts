import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UserRepositories);
    const user = await usersRepository.findOne({ email });

    if (!user) throw new Error("Email/password incorrect");

    const passwordIsEquals = await compare(password, user.password);

    if (!passwordIsEquals) throw new Error("Email/password invalid");

    const tokenJWT = sign(
      {
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return tokenJWT;
  }
}

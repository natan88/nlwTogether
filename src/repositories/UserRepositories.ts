import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

/**
 * Repositório customizado
 */
@EntityRepository(User)
export class UserRepositories extends Repository<User> {}

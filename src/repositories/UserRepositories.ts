import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

/**
 * Repositório customizado
 */
@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };

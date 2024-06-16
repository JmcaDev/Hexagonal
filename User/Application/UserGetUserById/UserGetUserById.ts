import { User } from "../../Domain/User";
import { UserId } from "../../Domain/UserId";
import { UserNotFoundError } from "../../Domain/UserNotFoundError";
import { UserRepository } from "../../Domain/UserRepository";

export class UserGetUserById{
    constructor(private repository: UserRepository){}

    async run (id: string): Promise<User>{
        const user = await this.repository.getUserById(new UserId(id));

        if (!user) throw new UserNotFoundError("User not found"); // Retorna 404

        return user;
    }
}
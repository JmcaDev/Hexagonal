import { UserCreatedAt } from "../../Domain/UserCreatedAt";
import { UserEmail } from "../../Domain/UserEmail";
import { UserId } from "../../Domain/UserId";
import { UserName } from "../../Domain/UserName";
import { UserRepository } from "../../Domain/UserRepository";
import { User } from "../../Domain/User";

export class UserEdit {
    constructor(private repository: UserRepository){}

    async run(id: string, name: string, email: string, createdAt: Date): Promise<void>{
        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserCreatedAt(createdAt)
        );

        return this.repository.editUser(user);
    }
}
import { UserRepository } from "../../Domain/UserRepository";
import { User } from "../../Domain/User";

export class UserGetUsers {
    constructor(private repository: UserRepository){}

    async run(): Promise<User[]>{
        return this,this.repository.getUsers();
    }
}
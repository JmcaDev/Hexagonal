import { User } from "../Domain/User";
import { UserId } from "../Domain/UserId";
import { UserRepository} from "../Domain/UserRepository"

export class InMemoryUserRepository implements UserRepository{
    private users: User[] = [];

    async createUser(user: User): Promise<void> {
        this.users.push(user);
    }

    async getUsers(): Promise<User[]> {
        return this.users;
    }
    async getUserById(id: UserId): Promise<User | null> {
        return this.users.find((user) => user.id.value === id.value) || null;
    }

    async editUser(user: User): Promise<void> {
        const index = this.users.findIndex((user) => user.id.value === user.id.value);
        this.users[index] = user;    
    }

    async deleteUser(id: UserId): Promise<void> {
        this.users = this.users.filter((user) => user.id.value !== id.value);
    }
    
}
//Interfaces

import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepository{
    createUser(user: User): Promise<void>;
    getUsers(): Promise<User[]>;
    getUser(id: UserId): Promise<User | null>;
    editUser(user: User): Promise<void>;
    delete(id: UserId): Promise<void>;
}
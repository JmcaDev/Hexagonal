//Interfaces

import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepository{
    createUser(user: User): Promise<void>;
    getUsers(): Promise<User[]>;
    getUserById(id: UserId): Promise<User | null>;
    editUser(user: User): Promise<void>;
    deleteUser(id: UserId): Promise<void>;
}
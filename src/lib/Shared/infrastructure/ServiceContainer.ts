import { UserGetUsers } from "../../User/Application/UserGetUsers/UserGetUsers"
import { UserGetUserById } from "../../User/Application/UserGetUserById/UserGetUserById"
import { UserCreate } from "../../User/Application/UserCreate/UserCreate"
import { UserEdit } from "../../User/Application/UserEdit/UserEdit"
import { UserDelete } from "../../User/Application/UserDelete/UserDelete"
import { InMemoryUserRepository } from "../../User/Infrastructure/InMemoryUserRepository"

const UserRepository = new InMemoryUserRepository

export const ServiceContainer = {
    user: {
        getUsers: new UserGetUsers(UserRepository),
        getUserById: new UserGetUserById(UserRepository),
        create: new UserCreate(UserRepository),
        edit: new UserEdit(UserRepository),
        delete: new UserDelete(UserRepository),
    },
};
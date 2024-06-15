//Entidad de dominio

import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserEmail } from "./UserEmail";
import { UserCreatedAt } from "./UserCreatedAt";

export class User {
    id: UserId;
    name: UserName;
    email: UserEmail;
    createdAt: UserCreatedAt;

    constructor(
        id: UserId, 
        name: UserName, 
        email: UserEmail, 
        createdAt: UserCreatedAt
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    public nameAndEmail() { //Metodos de dominio
        return `${this.name} - ${this.email}`
    }
}
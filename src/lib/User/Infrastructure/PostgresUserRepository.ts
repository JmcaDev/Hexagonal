import { Pool } from "pg";
import { UserRepository } from "../Domain/UserRepository";
import { User } from "../Domain/User";
import { UserId } from "../Domain/UserId";
import { UserName } from "../Domain/UserName";
import { UserEmail } from "../Domain/UserEmail";
import { UserCreatedAt } from "../Domain/UserCreatedAt";

type PostgresUser = {
    id: string,
    name: string,
    email: string,
    created_at: Date
};

export class PostgresUserRepository implements UserRepository{
    client: Pool;

    constructor(databaseURL: string ){
        this.client = new Pool({
            connectionString: databaseURL
        });
    }
    
    async createUser(user: User): Promise<void> {
        const query = {
            text: "INSERRT INTO users (id, name, email) VALUES ($1, $2, $3)",
            values: [user.id.value, user.name.value, user.email.value]
        };

        await this.client.query(query);
    }

    async getUsers(): Promise<User[]> {
        const query = {
            text: "SELECT * FROM users",
        };

        const result = await this.client.query<PostgresUser>(query);
        return result.rows.map((row) => this.mapToDomain(row));
    }

    async getUserById(id: UserId): Promise<User | null> {
        const query = {
            text: "SELECT * FROM users WHERE id = $1",
            values: [id.value]
        };

        const result = await this.client.query<PostgresUser>(query);

        if(result.rows.length === 0){
            return null;
        };

        const row = result.rows[0];

        return this.mapToDomain(row);
    }

    async editUser(user: User): Promise<void> {
        const query = {
            text: "UPDATE users SET name = $1, email = $2 WHERE id = $3",
            values: [user.name.value, user.email.value, user.id.value],
        };

        await this.client.query(query);
    }

    async deleteUser(id: UserId): Promise<void> {
        const query = {
            text: "DELETE FROM users WHERE id = $1",
            values: [id.value]
        };

        await this.client.query(query);
    } 

    private mapToDomain(user: PostgresUser): User{
        return new User(
            new UserId(user.id),
            new UserName(user.name),
            new UserEmail(user.email),
            new UserCreatedAt(user.created_at)
        );
    };
}
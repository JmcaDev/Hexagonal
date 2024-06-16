import { Request, Response } from "express";
import { ServiceContainer} from "../../Shared/infrastructure/ServiceContainer"
import { UserNotFoundError } from "../Domain/UserNotFoundError";

export class ExpressUserController{
    async getUsers(req: Request, res: Response){
        const users = await ServiceContainer.user.getUsers.run();
        return res.json(users).status(200);
    };

    async getUserById(req: Request, res: Response){
        try {
            const user = await ServiceContainer.user.getUserById.run(req.params.id);

            return res.json(user).status(200);
        } catch (error) {
            if(error instanceof UserNotFoundError){
                return res.status(404).json({message: error.message});
            };

            throw error;
        };
    };

    async create(req: Request, res: Response){

        const {id, name, email, createdAt} = req.body as {
            id: string,
            name: string,
            email: string,
            createdAt: string
        };

        await ServiceContainer.user.create.run(id, name, email, new Date(createdAt));

        return res.status(201).send();
    };

    async edit(req: Request, res: Response){
        const {id, name, email, createdAt} = req.body as {
            id: string,
            name: string,
            email: string,
            createdAt: string
        };

        await ServiceContainer.user.edit.run(id, name, email, new Date(createdAt));

        return res.status(201).send();
    };

    async delete(req: Request, res: Response){
        await ServiceContainer.user.delete.run(req.params.id);

        return res.status(204).send();
    };
};
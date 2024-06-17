import { NextFunction, Request, Response } from "express";
import { ServiceContainer} from "../../Shared/infrastructure/ServiceContainer"
import { UserNotFoundError } from "../Domain/UserNotFoundError";

export class ExpressUserController{
    async getUsers(req: Request, res: Response, next: NextFunction){
        try {
            const users = await ServiceContainer.user.getUsers.run();
            return res.json(users.map((user) => user.mapToPrimitives())).status(200);
        } catch (error) {
            next(error)
        }
    };

    async getUserById(req: Request, res: Response, next: NextFunction){
        try {
            const user = await ServiceContainer.user.getUserById.run(req.params.id);

            return res.json(user).status(200);
        } catch (error) {
            if(error instanceof UserNotFoundError){
                return res.status(404).json({message: error.message});
            };

            next(error);
        };
    };

    async create(req: Request, res: Response, next: NextFunction){
        console.log(req.body)
        try {
            const {id, name, email, createdAt} = req.body as {
                id: string,
                name: string,
                email: string,
                createdAt: string
            };
    
            await ServiceContainer.user.create.run(id, name, email, new Date(createdAt));
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    };

    async edit(req: Request, res: Response, next: NextFunction){
        try {
            const {id, name, email, createdAt} = req.body as {
                id: string,
                name: string,
                email: string,
                createdAt: string
            };
    
            await ServiceContainer.user.edit.run(id, name, email, new Date(createdAt));
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    };

    async delete(req: Request, res: Response, next: NextFunction){
        try {
            await ServiceContainer.user.delete.run(req.params.id);
            return res.status(204).send();
        } catch (error) {
            next(error)
        }
    };
};
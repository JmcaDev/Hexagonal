import { Router } from "express";
import { ExpressUserController } from "./ExpressUserController";

const controller = new ExpressUserController();

const ExpressUserRouter = Router();

ExpressUserRouter.get("/users/", controller.getUsers);
ExpressUserRouter.get("/users/:id", controller.getUserById);
ExpressUserRouter.post("/users/", controller.create);
ExpressUserRouter.post("/users/:id", controller.edit);
ExpressUserRouter.post("/users/:id", controller.delete);

export { ExpressUserRouter };
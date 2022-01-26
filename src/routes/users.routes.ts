import { Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../modules/accounts/useCases/listUser/ListUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const listUserController = new ListUserController();

// usersRoutes.use("/:id", ensureAuthenticated);

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", listUserController.handle);

export { usersRoutes };

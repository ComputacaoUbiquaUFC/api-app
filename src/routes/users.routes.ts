import { Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../modules/accounts/useCases/listUser/ListUserController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const listUserController = new ListUserController();

const updateUserController = new UpdateUserController();

usersRoutes.use("/:id", ensureAuthenticated);

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", listUserController.handle);
usersRoutes.put("/", updateUserController.handle);

export { usersRoutes };

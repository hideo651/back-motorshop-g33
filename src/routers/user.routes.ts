import { Router } from "express";
import { newUserController, listUsersController, updateUserController, deleteUserController } from "../controllers/users.controller";
import validAdmMiddleware from "../middleware/validAdm.middleware";
import validEmailMiddleware from "../middleware/validEmail.middleware";
import validIdMiddleware from "../middleware/validId.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";
import validUserMiddleware from "../middleware/validUser.middleware";
import validActiveUserMiddleware from "../middleware/validActiveUser.middleware";

const userRoutes = Router();

userRoutes.post('', validEmailMiddleware, newUserController);
userRoutes.patch('/:id', validTokenMiddleware, validIdMiddleware, validUserMiddleware, updateUserController);
userRoutes.get('', validTokenMiddleware, validAdmMiddleware, listUsersController);
userRoutes.delete('/:id', validTokenMiddleware, validIdMiddleware, validActiveUserMiddleware, validAdmMiddleware, deleteUserController);

export default userRoutes;

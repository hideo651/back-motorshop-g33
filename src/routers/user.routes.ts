import { Router } from "express";
import {
  newUserController,
  listUsersController,
  getProfileController,
  getUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/users.controller";
import validAdmMiddleware from "../middleware/validAdm.middleware";
import validEmailMiddleware from "../middleware/validEmail.middleware";
import validCpfMiddleware from "../middleware/validCpf.middleware";
import validIdMiddleware from "../middleware/validId.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";
import validUserMiddleware from "../middleware/validUser.middleware";
import validActiveUserMiddleware from "../middleware/validActiveUser.middleware";
import { verifyRequestPerSchema } from "../middleware/validSchema.middleware";
import { newUserSchema } from "../schemas/user.schemas";

const userRoutes = Router();

userRoutes.post(
  "",
  verifyRequestPerSchema(newUserSchema),
  validEmailMiddleware,
  validCpfMiddleware,
  newUserController
);
userRoutes.get(
  "",
  validTokenMiddleware,
  validAdmMiddleware,
  listUsersController
);
userRoutes.get(
  '/profile', 
  validTokenMiddleware, 
  getProfileController);
userRoutes.get(
  "/:id",
  validIdMiddleware,
  getUserController
);
userRoutes.patch(
  "/:id",
  validTokenMiddleware,
  validIdMiddleware,
  validUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  validTokenMiddleware,
  validIdMiddleware,
  validActiveUserMiddleware,
  deleteUserController
);

export default userRoutes;

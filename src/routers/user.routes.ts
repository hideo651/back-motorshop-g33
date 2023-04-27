import { Router } from "express";
import {
  newUserController,
  listUsersController,
  getProfileController,
  getUserController,
  updateUserController,
  deleteUserController,
  sendResetEmailPasswordController,
  resetPasswordController,
} from "../controllers/users.controller";
import validAdmMiddleware from "../middleware/validAdm.middleware";
import validEmailMiddleware from "../middleware/validEmail.middleware";
import validCpfMiddleware from "../middleware/validCpf.middleware";
import validIdMiddleware from "../middleware/validId.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";
import validUserMiddleware from "../middleware/validUser.middleware";
import { verifyRequestPerSchema } from "../middleware/validSchema.middleware";
import {
  newUserSchema,
  userResetPasswordSchema,
} from "../schemas/user.schemas";

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
userRoutes.get("/profile", validTokenMiddleware, getProfileController);
userRoutes.get("/:id", validIdMiddleware, getUserController);
userRoutes.patch(
  "",
  validTokenMiddleware,
  validIdMiddleware,
  //validUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "",
  validTokenMiddleware,
  validIdMiddleware,
  deleteUserController
);

userRoutes.post("/resetPassword", sendResetEmailPasswordController);
userRoutes.patch(
  "/resetPassword/:token",
  verifyRequestPerSchema(userResetPasswordSchema),
  resetPasswordController
);

export default userRoutes;

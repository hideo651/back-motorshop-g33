import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { verifyRequestPerSchema } from "../middleware/validSchema.middleware";
import loginUserSchema from "../schemas/login.schemas";

const loginRoutes = Router();

loginRoutes.post("", verifyRequestPerSchema(loginUserSchema), loginController);

export default loginRoutes;

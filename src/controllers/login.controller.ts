import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import loginService from "../services/login/login.service";

export const loginController = async (req: Request, res: Response) => {
  const payload: IUserLogin = req.body;
  const data = await loginService(payload);

  return res.status(200).json(data);
};

import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import AppError from "../errors/AppError";

const validCpfMiddleware = async (
  req: Request,
  res: Response,
  nxt: NextFunction
) => {
  const checkCpf = req.body.cpf;
  const userRepo = AppDataSource.getRepository(User);
  const validQuery = await userRepo.findOneBy({ cpf: checkCpf });

  if (String(validQuery) !== "null") {
    throw new AppError(400, "CPF already registered to another user.");
  }

  return nxt();
};

export default validCpfMiddleware;

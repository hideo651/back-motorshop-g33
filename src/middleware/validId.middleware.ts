import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const validIdMiddleware = async ( req:Request, res:Response, nxt:NextFunction) => {
    const checkId = req.params.id;
    const userRepo = AppDataSource.getRepository(User);
    
    const validQuery = await userRepo.findOneBy({id: checkId});
    if(String(validQuery) === 'null'){
        throw new AppError(404, 'User not found!');
    }
    return nxt();    
}

export default validIdMiddleware
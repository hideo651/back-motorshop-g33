import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/user.schemas";

const listUsersService = async () => {
    const userRepo = AppDataSource.getRepository(User);
    const listUsers = await userRepo
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.announcement", "annoucement")
        .getMany();
    const returnInfo = await Promise.all(listUsers.map(async(user):Promise<IUser> => {
       const result = await userResponseSchema.validate(user, {stripUnknown: true});
       return result;
    }));
    return returnInfo;
}

export default listUsersService;
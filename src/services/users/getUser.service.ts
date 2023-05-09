import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IProfile } from "../../interfaces/users";
import { userProfileSchema } from "../../schemas/user.schemas";

const getUserService = async (userId: string): Promise<IProfile> => {
    const userRepo = AppDataSource.getRepository(User);
    const getUser = await userRepo
    .createQueryBuilder("user")
    .where("user.id = :id", { id: userId })
    .leftJoinAndSelect("user.announcement", "annoucement")
    .getOne();
    
    const returnInfo = await userProfileSchema.validate(
        getUser,
        {
            stripUnknown: true,
        }
    );
    return returnInfo;
}

export default getUserService;
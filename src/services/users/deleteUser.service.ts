import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId:string) => {
    const userRepo = AppDataSource.getRepository(User);
    
    const userData = await userRepo.findOneBy({id: userId});
    const userInfo = {isActive:false};
    const updateUser = userRepo.create({
        ...userData,
        ...userInfo
    })
    await userRepo.save(updateUser);
    return {};
}

export default deleteUserService;
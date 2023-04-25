import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId:string) => {
    const deleteUserRepo = AppDataSource.getRepository(User);
    
    await deleteUserRepo
        .createQueryBuilder("users")
        .delete()
        .where("id = :id", { id: userId })
        .execute()

    return;
}

const softDeleteUserService = async (userId:string) => {
    const userRepo = AppDataSource.getRepository(User);
    
    const userData = await userRepo.findOneBy({id: userId});
    let userInfo = {isActive:false};
    if(!userData.isActive) userInfo = {isActive:true}
    const updateUser = userRepo.create({
        ...userData,
        ...userInfo
    })
    await userRepo.save(updateUser);
    return {};
}

export default deleteUserService;
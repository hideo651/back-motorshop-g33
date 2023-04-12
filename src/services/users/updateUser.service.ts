import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/user.schemas";
import { hashSync } from "bcrypt";

const updateUserService = async (userId: string, userInfo: IUserUpdate) => {
  const userRepo = AppDataSource.getRepository(User);
  if (JSON.stringify(userInfo) === "{}") {
    return { message: "Unauthorized update.222" };
  }
  if (userInfo.password) {
    userInfo.password = hashSync(userInfo.password, 10);
  }
  if (userInfo.birthday) {
    userInfo.birthday = new Date(userInfo.birthday);
  }
  const userData = await userRepo.findOneBy({ id: userId });
  const updateUser = userRepo.create({
    ...userData,
    ...userInfo,
  });
  await userRepo.save(updateUser);

  const returnUser = await userResponseSchema.validate(updateUser, {
    stripUnknown: true,
  });
  return returnUser;
};

export default updateUserService;

import { hashSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";

export const resetPasswordService = async (
  password: string,
  resetToken: string
) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ reset_token: resetToken });

  console.log(user);
  console.log(password);

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const updateUser = userRepo.create({
    ...user,
    reset_token: null,
    password: hashSync(password, 10),
  });

  await userRepo.save(updateUser);

  return { message: "Password change with sucess" };
};

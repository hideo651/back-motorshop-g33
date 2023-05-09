import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { resetPasswordTemplate } from "../../utils/sendEmail.utils";
import { sendEmail } from "../../utils/sendEmail.utils";

export const sendResetEmailPasswordService = async (
  email: string,
  protocol: string,
  host: string
) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ email: email });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const resetToken = jwt.sign({}, process.env.SECRET_KEY, {
    expiresIn: "30min",
  });

  const updateUser = userRepo.create({
    ...user,
    reset_token: resetToken,
  });

  await userRepo.save(updateUser);

  const resetPassword = resetPasswordTemplate(
    email,
    user.name,
    resetToken,
    protocol,
    host
  );

  await sendEmail(resetPassword);

  return { message: "token send" };
};

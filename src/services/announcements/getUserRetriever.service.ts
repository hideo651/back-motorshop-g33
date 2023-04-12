import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import AppError from "../../errors/AppError";

export const getUserRetrieverService = async (
  id: string
): Promise<Announcement> => {
  const announcement = await AppDataSource.getRepository(Announcement)
    .createQueryBuilder("announcement")
    .leftJoinAndSelect("announcement.user", "user")
    .select(["announcement", "user.name", "user.id"])
    .getOne();

  return announcement;
};

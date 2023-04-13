import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import AppError from "../../errors/AppError";

export const getUserRetrieverService = async (
  id: string
): Promise<Announcement> => {
  const announcement = await AppDataSource.getRepository(Announcement)
    .createQueryBuilder("announcement")
    .leftJoinAndSelect("announcement.photos", "photos")
    .leftJoinAndSelect("announcement.user", "user")
    .select([
      "announcement",
      "photos",
      "user.id",
      "user.name",
      "user.description",
    ])
    .where("announcement.id = :id", { id: id })
    .getOne();

  // const announcement = await announcementRepo.findOne({
  //   where: { id: id },
  //   relations: { user: true },
  // });

  return announcement;
};

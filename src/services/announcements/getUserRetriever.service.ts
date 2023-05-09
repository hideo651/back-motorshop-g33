import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const getUserRetrieverService = async (
  id: string
): Promise<Announcement> => {
  const announcement = await AppDataSource.getRepository(Announcement)
    .createQueryBuilder("announcement")
    .leftJoinAndSelect("announcement.photos", "photos")
    .leftJoinAndSelect("announcement.user", "user")
    .leftJoinAndSelect("announcement.comment", "comment")
    .leftJoinAndSelect("comment.user", "comment_user")
    .select([
      "comment",
      "comment_user.name",
      "comment_user.id",
      "announcement",
      "photos",
      "user.id",
      "user.name",
      "user.description",
      "user.phone",
    ])
    .where("announcement.id = :id", { id: id })
    .getOne();

  return announcement;
};

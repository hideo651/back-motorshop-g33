import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import AppError from "../../errors/AppError";

export const deleteAnnouncementService = async (
  announcementId: string
): Promise<void> => {
  const deleteAnnouncementRepo = AppDataSource.getRepository(Announcement);
  await deleteAnnouncementRepo
        .createQueryBuilder("announcement")
        .delete()
        .where("id = :id", { id: announcementId })
        .execute()

  return
};

import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import AppError from "../../errors/AppError";

export const deleteAnnouncementService = async (
  announcementId: string
): Promise<void> => {
  const announcementRepo = AppDataSource.getRepository(Announcement);
  const announcement = await announcementRepo.findOneBy({
    id: announcementId,
  });

  if (!announcement) {
    throw new AppError(404, "Announcement not found");
  }

  await announcementRepo.remove(announcement);
};

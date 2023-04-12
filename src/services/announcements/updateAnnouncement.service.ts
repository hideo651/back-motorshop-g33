import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import AppError from "../../errors/AppError";
import { IAnnouncementUpdate } from "../../interfaces/Announcement";
import { AnnouncementResponseSchema } from "../../schemas/announcement";

export const updateAnnouncementService = async (
  announcementId: string,
  announcementData: IAnnouncementUpdate
): Promise<object> => {
  const announcementRepo = AppDataSource.getRepository(Announcement);
  const existingAnnouncement = await announcementRepo.findOneBy({
    id: announcementId,
  });

  if (!existingAnnouncement) {
    throw new AppError(404, "Announcement not found");
  }

  const updatedAnnouncement = announcementRepo.create({
    ...existingAnnouncement,
    ...announcementData,
  });
  await announcementRepo.save(updatedAnnouncement);

  const returnAnnouncement = await AnnouncementResponseSchema.validate(
    updatedAnnouncement,
    { stripUnknown: true }
  );

  return returnAnnouncement;
};

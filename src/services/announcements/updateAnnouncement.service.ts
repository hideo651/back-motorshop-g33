import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { IAnnouncementUpdate } from "../../interfaces/Announcement";
import { AnnouncementResponseSchema } from "../../schemas/announcement";

export const updateAnnouncementService = async (
  announcementId: string,
  announcementData: IAnnouncementUpdate
): Promise<object> => {
  try {
    const announcementRepo = AppDataSource.getRepository(Announcement);
    const existingAnnouncement = await announcementRepo.findOneBy({
      id: announcementId,
    });

    if (!existingAnnouncement) {
      throw new Error("Announcement not found");
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
  } catch (error) {
    throw new Error(error);
  }
};

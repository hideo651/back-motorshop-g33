import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { User } from "../../entities/user.entity";
import { IAnnouncementRequest } from "../../interfaces/Announcement";
import { AnnouncementResponseSchema } from "../../schemas/announcement";

export const newAnnouncementService = async (
  payload: IAnnouncementRequest,
  userId: string
) => {
  const announcementRepo = AppDataSource.getRepository(Announcement);
  const userRepo = AppDataSource.getRepository(User);

  const foundUser = await userRepo.findOneBy({ id: userId });

  const newAnnouncement = announcementRepo.create({
    ...payload,
    user: foundUser,
  });

  await announcementRepo.save(newAnnouncement);

  const returnAnnouncement = await AnnouncementResponseSchema.validate(
    newAnnouncement,
    { stripUnknown: true }
  );

  return returnAnnouncement;
};

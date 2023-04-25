import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Photos } from "../../entities/photos.entity";
import { User } from "../../entities/user.entity";
import { IAnnouncementRequest } from "../../interfaces/Announcement";
import { AnnouncementResponseSchema } from "../../schemas/announcement";

export const newAnnouncementService = async (
  payload: IAnnouncementRequest,
  userId: string
) => {
  const announcementRepo = AppDataSource.getRepository(Announcement);
  const userRepo = AppDataSource.getRepository(User);
  const photoRepo = AppDataSource.getRepository(Photos);

  const foundUser = await userRepo.findOneBy({ id: userId });

  const fotos = payload.photos;

  const newAnnouncement = announcementRepo.create({
    avatar: payload.avatar,
    brand: payload.brand,
    color: payload.color,
    fipe: payload.fipe,
    fuel: payload.fuel,
    milage: payload.milage,
    model: payload.model,
    price: payload.price,
    description: payload.description,
    year: payload.year,
    user: foundUser,
  });

  await announcementRepo.save(newAnnouncement);
  if (fotos.length > 0) {
    for (let i = 0; i < fotos.length; i++) {
      const newPhotos = photoRepo.create({
        image: fotos[i],
        announcement: newAnnouncement,
      });
      await photoRepo.save(newPhotos);
    }

    //   const newPhotos = fotos.map((foto) => {
    //     const newPhoto = photoRepo.create({
    //       image: foto,
    //       announcement: newAnnouncement,
    //     });
    //     return newPhoto;
    //   });

    //   await photoRepo.save(newPhotos);
  }

  const returnAnnouncement = await AnnouncementResponseSchema.validate(
    newAnnouncement,
    { stripUnknown: true }
  );

  return returnAnnouncement;
};

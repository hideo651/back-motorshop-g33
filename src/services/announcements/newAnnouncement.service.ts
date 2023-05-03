import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Photos } from "../../entities/photos.entity";
import { User } from "../../entities/user.entity";
import { IAnnouncementRequest } from "../../interfaces/Announcement";
import { AnnouncementResponseSchema } from "../../schemas/announcement";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

export const newAnnouncementService = async (
  payload: IAnnouncementRequest,
  userId: string,
  arrayPhotos: any
) => {
  const announcementRepo = AppDataSource.getRepository(Announcement);
  const userRepo = AppDataSource.getRepository(User);
  const photoRepo = AppDataSource.getRepository(Photos);

  const foundUser = await userRepo.findOneBy({ id: userId });

  const fotos = payload.photos;

  let files;

  if (Array.isArray(arrayPhotos)) {
    // Se arrayPhotos for um array, atribui a variável files
    files = arrayPhotos;
  } else {
    // Se arrayPhotos for um objeto, atribui a variável files o array de arquivos do campo "image"
    files = arrayPhotos["image"];
  }

  const uploadResults = [];

  for (const file of files) {
    const upload = await cloudinary.uploader.upload(
      file.path,
      (error, result) => result
    );
    fs.unlink(file.path, (error) => {
      if (error) {
        console.log(error);
      }
    });
    uploadResults.push(upload);
  }

  const newAnnouncement = announcementRepo.create({
    avatar: uploadResults[0].secure_url,
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
  if (uploadResults.length > 0) {
    for (let i = 0; i < uploadResults.length; i++) {
      const newPhotos = photoRepo.create({
        image: uploadResults[i].secure_url,
        announcement: newAnnouncement,
      });
      await photoRepo.save(newPhotos);
    }
  }

  const returnAnnouncement = await AnnouncementResponseSchema.validate(
    newAnnouncement,
    { stripUnknown: true }
  );

  return returnAnnouncement;
};

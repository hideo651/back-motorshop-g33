import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Announcement } from "../entities/announcement.entity";
import AppError from "../errors/AppError";

export const ownerAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idAnnouncement = req.params.id;
  const idUser = req.user.id;

  const announcementRepo = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepo.findOne({
    where: { id: idAnnouncement },
    relations: { user: true },
  });

  console.log(req.user.isAdm);

  if (req.user.isAdm === true) {
    return next();
  }

  if (announcement.user.id !== idUser) {
    throw new AppError(403, "You cannot change another user's data.");
  }

  next();
};

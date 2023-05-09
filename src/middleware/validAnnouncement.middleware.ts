import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Announcement } from "../entities/announcement.entity";
import AppError from "../errors/AppError";

export const validIdAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idAnnouncement = req.params.id;
  const announcementRepo = AppDataSource.getRepository(Announcement);

  try {
    const foundAnnouncement = await announcementRepo.findOneBy({
      id: idAnnouncement,
    });
    if (!foundAnnouncement) {
      throw new AppError(404, "Announcement not found");
    }
    next();
  } catch (error) {
    throw new AppError(404, "Announcement not found");
  }
};

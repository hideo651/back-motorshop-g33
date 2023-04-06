import { Request, Response } from "express";
import { newAnnouncementService } from "../services/announcements/newAnnouncement.service";

export const newAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await newAnnouncementService(req.body, req.user.id);

  return res.status(201).json(data);
};

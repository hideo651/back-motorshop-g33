import { Request, Response } from "express";
import { newAnnouncementService } from "../services/announcements/newAnnouncement.service";
import { listAnnouncementService } from "../services/announcements/listAnnouncement.service";

export const newAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await newAnnouncementService(req.body, req.user.id);

  return res.status(201).json(data);
};

export const listAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const data = await listAnnouncementService(page, limit);

  return res.status(200).json(data);
};

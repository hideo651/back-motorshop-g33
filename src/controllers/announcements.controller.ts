import { Request, Response } from "express";
import { newAnnouncementService } from "../services/announcements/newAnnouncement.service";
import {
  listAnnouncementService,
  randAnnouncementService,
} from "../services/announcements/listAnnouncement.service";
import { updateAnnouncementService } from "../services/announcements/updateAnnouncement.service";
import { deleteAnnouncementService } from "../services/announcements/deleteAnnouncement.service";
import { getUserRetrieverService } from "../services/announcements/getUserRetriever.service";
import { registerPhotosAnnouncementService } from "../services/announcements/registerPhotosAnnouncement.service";

export const newAnnouncementController = async (
  req: Request,
  res: Response
) => {
  console.log(req.body);
  // console.log(req.user.id);

  const obj = JSON.parse(JSON.stringify(req.body));
  const data = await newAnnouncementService(req.body, req.user.id, req.files);

  return res.status(201).json(data);
};

export const listAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  if (page) {
    const data = await listAnnouncementService(page, limit);
    return res.status(200).json(data);
  } else {
    const data = await randAnnouncementService();
    return res.status(200).json(data);
  }
};

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const updatedData = await updateAnnouncementService(req.params.id, req.body);
  return res.status(200).json(updatedData);
};

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await deleteAnnouncementService(req.params.id);

  return res.status(204).json();
};

export const getUserRetrieveController = async (
  req: Request,
  res: Response
) => {
  const announcement = await getUserRetrieverService(req.params.id);
  return res.status(200).json(announcement);
};

export const registerPhotosAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const photos = req.body;
  const data = await registerPhotosAnnouncementService(req.params.id, photos);
  return res.status(200).json(data);
};

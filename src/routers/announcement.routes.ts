import { Router } from "express";
import {
  newAnnouncementController,
  listAnnouncementController,
  updateAnnouncementController,
  deleteAnnouncementController,
  getUserRetrieveController,
  registerPhotosAnnouncementController,
} from "../controllers/announcements.controller";
import validTokenMiddleware from "../middleware/validToken.middleware";
import { verifyRequestPerSchema } from "../middleware/validSchema.middleware";
import { AnnouncementRequestSchema } from "../schemas/announcement";
import { ensureIsStaffOrIsAdmMiddleware } from "../middleware/ensureIsStaffOrIsAdm.middleware";
import { validIdAnnouncement } from "../middleware/validAnnouncement.middleware";
import { ownerAnnouncement } from "../middleware/ownerAnnouncement.middleware";

const announcementRoutes = Router();

announcementRoutes.post(
  "/",
  validTokenMiddleware,
  verifyRequestPerSchema(AnnouncementRequestSchema),
  newAnnouncementController
);
announcementRoutes.post(
  "/:id/fotos",
  validTokenMiddleware,
  validIdAnnouncement,
  registerPhotosAnnouncementController
);

announcementRoutes.get("/", listAnnouncementController);
announcementRoutes.patch(
  "/:id",
  ensureIsStaffOrIsAdmMiddleware,
  validTokenMiddleware,
  validIdAnnouncement,
  ownerAnnouncement,
  updateAnnouncementController
);
announcementRoutes.get(
  "/:id",
  validTokenMiddleware,
  validIdAnnouncement,
  getUserRetrieveController
);
announcementRoutes.delete(
  "/:id",
  ensureIsStaffOrIsAdmMiddleware,
  validTokenMiddleware,
  validIdAnnouncement,
  ownerAnnouncement,
  deleteAnnouncementController
);

export default announcementRoutes;

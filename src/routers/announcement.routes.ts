import { Router } from "express";
import {
  listAnnouncementController,
  newAnnouncementController,
  updateAnnouncementController,
} from "../controllers/announcements.controller";
import validTokenMiddleware from "../middleware/validToken.middleware";
import { verifyRequestPerSchema } from "../middleware/validSchema.middleware";
import { AnnouncementRequestSchema } from "../schemas/announcement";
import { ensureIsStaffOrIsAdmMiddleware } from "../middleware/ensureIsStaffOrIsAdm.middleware";

const announcementRoutes = Router();

announcementRoutes.post(
  "/",
  validTokenMiddleware,
  verifyRequestPerSchema(AnnouncementRequestSchema),
  newAnnouncementController
);
announcementRoutes.get("/", listAnnouncementController);
announcementRoutes.patch(
  "/:id",
  ensureIsStaffOrIsAdmMiddleware,
  updateAnnouncementController,
  );

export default announcementRoutes;

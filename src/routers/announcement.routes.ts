import { Router } from "express";
import {
  listAnnouncementController,
  newAnnouncementController,
} from "../controllers/announcements.controller";
import validTokenMiddleware from "../middleware/validToken.middleware";
import { verifyRequestPerSchema } from "../middleware/validSchema.middleware";
import { AnnouncementRequestSchema } from "../schemas/announcement";

const announcementRoutes = Router();

announcementRoutes.post(
  "/",
  validTokenMiddleware,
  verifyRequestPerSchema(AnnouncementRequestSchema),
  newAnnouncementController
);

announcementRoutes.get("/", listAnnouncementController);

export default announcementRoutes;

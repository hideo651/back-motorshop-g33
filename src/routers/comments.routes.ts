import { Router } from "express";
import { newCommentController } from "../controllers/comments.controller";
import validTokenMiddleware from "../middleware/validToken.middleware";
import { validIdAnnouncement } from "../middleware/validAnnouncement.middleware";
import { verifyRequestPerSchema } from "../middleware/validSchema.middleware";
import { commentSchema } from "../schemas/comment.schema";

const commentRouter = Router();

commentRouter.post(
  "/:id",
  validTokenMiddleware,
  verifyRequestPerSchema(commentSchema),
  validIdAnnouncement,
  newCommentController
);

export default commentRouter;

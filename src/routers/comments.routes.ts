import { Router } from "express";
import {
  listCommentController,
  listRetrieverCommentController,
  newCommentController,
} from "../controllers/comments.controller";
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

commentRouter.get("/", listCommentController);
commentRouter.get("/:id", listRetrieverCommentController);

export default commentRouter;

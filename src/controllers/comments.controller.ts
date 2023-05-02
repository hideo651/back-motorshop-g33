import { Request, Response } from "express";
import { newCommentService } from "../services/comments/newComment.service";

export const newCommentController = async (req: Request, res: Response) => {
  const commentId = req.params.id;
  const userId = req.user.id;
  const { comment } = req.body;
  const data = await newCommentService(commentId, userId, comment);
  res.status(201).json(data);
};

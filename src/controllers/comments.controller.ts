import { Request, Response } from "express";
import { newCommentService } from "../services/comments/newComment.service";
import { listCommentService } from "../services/comments/llistComment.service";
import { listRetrieverCommentService } from "../services/comments/listRetrieverComment.service";
import { commentUpdadeService } from "../services/comments/comentUpdade.service";

export const newCommentController = async (req: Request, res: Response) => {
  const announcId = req.params.id;
  const userId = req.user.id;
  const { comment } = req.body;
  const data = await newCommentService(announcId, userId, comment);
  res.status(201).json(data);
};

export const commentUpdadeController = async (req: Request, res: Response) => {
  const commentId = req.params.id;
  const userId = req.user.id;
  const { comment } = req.body;

  const data = await commentUpdadeService(commentId, userId, comment);
  res.status(200).json(data);
};

export const listCommentController = async (req: Request, res: Response) => {
  const data = await listCommentService();
  res.status(200).json(data);
};

export const listRetrieverCommentController = async (
  req: Request,
  res: Response
) => {
  const announc = req.params.id;
  const data = await listRetrieverCommentService(announc);
  res.status(200).json(data);
};

import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";

export const listCommentService = async () => {
  const commentRepo = AppDataSource.getRepository(Comment);

  const comments = await commentRepo.find();

  return comments;
};

import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import AppError from "../../errors/AppError";
import { userResponseSchema } from "../../schemas/user.schemas";

export const commentUpdadeService = async (
  commentId: string,
  userID: string,
  commentUpdade: any
) => {
  const commentRepo = AppDataSource.getRepository(Comment);

  const comment_obj = await commentRepo.findOneBy({ id: commentId });

  if (!comment_obj) {
    throw new AppError(404, "Comentario nao encontrado");
  }

  if (userID !== comment_obj.user.id) {
    throw new AppError(404, "Você não tem autorização");
  }

  const updadeRes = commentRepo.create({
    ...comment_obj,
    comments: commentUpdade,
  });
  await commentRepo.save(updadeRes);

  const returnUser = await userResponseSchema.validate(updadeRes.user, {
    stripUnknown: true,
  });

  const updateComment = { ...updadeRes, user: returnUser };

  return updateComment;
};

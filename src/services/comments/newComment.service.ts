import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Comment } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";
import { ICommentResponse } from "../../interfaces/comment";
import { commentResponseSchema } from "../../schemas/comment.schema";

export const newCommentService = async (
  announcId: string,
  userId: string,
  comments: string
): Promise<any> => {
  console.log(announcId, userId);

  const userRepo = AppDataSource.getRepository(User);
  const announc = AppDataSource.getRepository(Announcement);
  const commentRepo = AppDataSource.getRepository(Comment);

  const user = await userRepo.findOneBy({ id: userId });
  const announcement = await announc.findOneBy({ id: announcId });

  const newComment = commentRepo.create({
    comments,
    user,
    announcement,
  });
  const saveComment = await commentRepo.save(newComment);
  //se quiser mudar oque vem na resposta somente alterar o Schema
  const validateResponse = await commentResponseSchema.validate(saveComment, {
    stripUnknown: true,
  });

  return validateResponse;
};

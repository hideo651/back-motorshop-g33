import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import AppError from "../../errors/AppError";

export const commentDeleteService = async (
  commentId: string,
  userID: string
) => {
  const commentRepo = AppDataSource.getRepository(Comment);
  
  const comment_obj = await commentRepo.findOneBy({ id: commentId });
 
  if (!comment_obj) {
    throw new AppError(404, "Comentario nao encontrado");
  }
  console.log('VC: ', userID)
  console.log('DOCOM: ', comment_obj.user.id)
  if (userID !== comment_obj.user.id) {
    throw new AppError(404, "Você não tem autorização");
    
  }
  await commentRepo
        .createQueryBuilder("comment")
        .delete()
        .where("id = :id", { id: commentId })
        .execute()

  return;
};

import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const listRetrieverCommentService = async (announcId: string) => {
  const announc = AppDataSource.getRepository(Announcement);

  const announcComment = await announc.findOne({
    select: { id: true, brand: true, model: true },
    where: { id: announcId },
    relations: { comment: true },
  });

  return announcComment;
};

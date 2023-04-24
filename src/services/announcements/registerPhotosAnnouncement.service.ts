import AppDataSource from "../../data-source";
import { Photos } from "../../entities/photos.entity";

export const registerPhotosAnnouncementService = async (
  id: string,
  photos: []
) => {
  const photosRepo = AppDataSource.getRepository(Photos);
};

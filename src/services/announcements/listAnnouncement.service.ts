import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { IAnnouncements } from "../../interfaces/Announcement";

export const listAnnouncementService = async (page: number, limit: number) => {
  const announcementRepo = AppDataSource.getRepository(Announcement);

  const announcements = announcementRepo.find();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results: any = {};

  if (endIndex < (await announcements).length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = (await announcements).slice(startIndex, endIndex);

  return results;
};

import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const listAnnouncementService = async (page: number, limit: number) => {
  const announcementRepo = AppDataSource.getRepository(Announcement);
  const announcementsCount = await announcementRepo.count();

  const announcements = await AppDataSource.getRepository(Announcement)
    .createQueryBuilder("announcement")
    .leftJoinAndSelect("announcement.user", "user")
    .select(["announcement", "user.name", "user.id"])
    .skip((page - 1) * limit)
    .take(limit)
    .getMany();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results: any = {};

  if (endIndex < announcementsCount) {
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

  results.results = announcements;

  return results;
};

export const randAnnouncementService = async () => {
  const announcementRepo = AppDataSource.getRepository(Announcement);
  const announcementsCount = await announcementRepo.count();

  const announcements = await AppDataSource.getRepository(Announcement)
    .createQueryBuilder("announcement")
    .leftJoinAndSelect("announcement.user", "user")
    .select(["announcement", "user.name", "user.id"])
    .orderBy("RANDOM()")
    .getMany();
    
  const results: any = {};
  results.results = announcements;

  return results;
};
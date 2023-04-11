import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const deleteAnnouncementService = async (
	announcementId: string
): Promise<void> => {
	const announcementRepo = AppDataSource.getRepository(Announcement);
	const announcement = await announcementRepo.findOneBy({
		id: announcementId,
	});

	if (!announcement) {
		throw new Error("Announcement not found");
	}

	try {
		await announcementRepo.remove(announcement);
	} catch (error) {
		throw new Error(error);
	}
};

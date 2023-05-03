import { IAnnouncements } from "../Announcement";
import { IUser } from "../users";

export interface ICommentRequest {
  comments: string;
  user: IUser;
  announcement: IAnnouncements;
}

export interface ICommentResponse {
  id: string;
  comments: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
  announcement: IAnnouncements;
}

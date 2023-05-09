import { IUser } from "../users";

export interface IAnnouncementRequest {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  milage: number;
  color: string;
  fipe: number;
  price: number;
  description: string;
  avatar: string;
  user: IUser;
  photos?: string[];
}

export interface IAnnouncements {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  milage: number;
  color: string;
  fipe: "decimal";
  price: "decimal";
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  avatar: string;
  user: IUser;
  photos: IPhotos[];
}
export interface IPhotos {
  id: string;
  image: string;
  createdAt: Date;
}

export interface IAnnouncementUpdate {
  brand?: string;
  model?: string;
  year?: number;
  fuel?: string;
  milage?: number;
  color?: string;
  fipe?: number;
  price?: number;
  description?: string;
  avatar?: string;
  photos?: IPhotos[];
}

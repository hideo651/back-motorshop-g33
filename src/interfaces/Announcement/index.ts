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
  cover: string;
  avatar?: string;
  user: IUser;
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
  cover: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  avatar?: string;
  user: IUser;
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
  cover?: string;
} //ponto de observação, estou passando objeto User, se preferir pode ser userId : string

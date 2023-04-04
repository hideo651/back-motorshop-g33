import { IUser } from "../users";

export interface ICarRequest {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  milage: number;
  color: string;
  fipe: "decimal";
  price: number;
  description: string;
  cover: string;
  user: IUser;
}

export interface ICars {
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
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
}

export interface ICarUpdate {
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
  user: IUser;
} //ponto de observação, estou passando objeto User, se preferir pode ser userId : string

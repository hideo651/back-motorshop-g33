import { IAnnouncements } from "../Announcement";

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  birthday: Date;
  description: string;
  cep: string;
  state: string;
  city: string;
  number: string;
  street: string;
  complement?: string;
  isStaff: boolean;
  isAdm: boolean;
}

export interface IUser {
  updatedAt: Date;
  createdAt: Date;
  isActive: boolean;
  isAdm: boolean;
  isStaff: boolean;
  complement: string;
  number: string;
  street: string;
  city: string;
  state: string;
  cep: string;
  description: string;
  birthday: Date;
  phone: string;
  cpf: string;
  email: string;
  name: string;
  id: string;
}

export interface IProfile {
  announcement: IAnnouncements[];
  updatedAt: Date;
  createdAt: Date;
  isStaff: boolean;
  complement: string;
  number: string;
  street: string;
  city: string;
  state: string;
  cep: string;
  description: string;
  birthday: Date;
  phone: string;
  cpf: string;
  email: string;
  name: string;
  id: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  phone?: string;
  birthday?: Date;
  description?: string;
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
  isStaff?: boolean;
  reset_token?: string;
}

export interface IUserToken {
  id: string;
  isAdm: boolean;
  isStaff: boolean;
}

export interface ISendEmailRequest {
  to: string;
  subject: string;
  text: string;
}

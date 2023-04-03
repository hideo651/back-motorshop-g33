import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserUpdate, IUser } from "../interfaces/users";

export const newUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().min(2).max(100).required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
});

export const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string()
});

export const userResponseSchema: SchemaOf<IUser> = yup.object().shape({
    updatedAt: yup.date(),
    createdAt: yup.date(),
    isActive: yup.boolean(),
    isAdm: yup.boolean(),
    email: yup.string().email(),
    name: yup.string(),
    id: yup.string()
});

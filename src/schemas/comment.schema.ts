import * as yup from "yup";

export const commentSchema = yup.object().shape({
  comment: yup.string().required(),
});

const UserCommentResponseSchema = yup.object().shape({
  isActive: yup.boolean().required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  id: yup.string().required(),
});

export const AnnouncCommentResponseSchema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  isActive: yup.bool().required(),
  avatar: yup.string().notRequired(),
  id: yup.string().required(),
});

export const commentResponseSchema = yup.object().shape({
  announcement: AnnouncCommentResponseSchema.required(),
  user: UserCommentResponseSchema.required(),
  comments: yup.string().required(),
  id: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

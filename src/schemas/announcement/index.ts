import * as yup from "yup";

export const AnnouncementResponseSchema = yup.object().shape({
  id: yup.string().required(),
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().required(),
  fuel: yup.string().required(),
  milage: yup.number().integer().required(),
  color: yup.string().required(),
  fipe: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  cover: yup.string().required(),
  isActive: yup.bool().required(),
  createdAt: yup.date().required(),
  avatar: yup.string().notRequired(),
  updatedAt: yup.date().required(),
});

export const AnnouncementRequestSchema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().required(),
  fuel: yup.string().required(),
  milage: yup.number().integer().required(),
  color: yup.string().required(),
  fipe: yup
    .number()
    .transform((value, originalValue) => {
      const floantNUmber = parseFloat(originalValue);
      return isNaN(floantNUmber) ? undefined : floantNUmber;
    })
    .typeError("O valor precisa der decimal")
    .required(),
  price: yup
    .number()
    .transform((value, originalValue) => {
      const floantNUmber = parseFloat(originalValue);
      return isNaN(floantNUmber) ? undefined : floantNUmber;
    })
    .typeError("O valor precisa der decimal")
    .required(),
  description: yup.string().required(),
  avatar: yup.string().notRequired(),
  cover: yup.string().required(),
});

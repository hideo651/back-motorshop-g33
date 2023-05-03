import { Router } from "express";
import {
  newUserController,
  listUsersController,
  getProfileController,
  getUserController,
  updateUserController,
  deleteUserController,
  sendResetEmailPasswordController,
  resetPasswordController,
} from "../controllers/users.controller";
import validAdmMiddleware from "../middleware/validAdm.middleware";
import validEmailMiddleware from "../middleware/validEmail.middleware";
import validCpfMiddleware from "../middleware/validCpf.middleware";
import validIdMiddleware from "../middleware/validId.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";
import validUserMiddleware from "../middleware/validUser.middleware";
import { verifyRequestPerSchema } from "../middleware/validSchema.middleware";
import {
  newUserSchema,
  userResetPasswordSchema,
} from "../schemas/user.schemas";
import { uploadImage } from "../middleware/photo.middleare";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

const userRoutes = Router();

userRoutes.post(
  "",
  verifyRequestPerSchema(newUserSchema),
  validEmailMiddleware,
  validCpfMiddleware,
  newUserController
);
userRoutes.get(
  "",
  validTokenMiddleware,
  validAdmMiddleware,
  listUsersController
);
userRoutes.get("/profile", validTokenMiddleware, getProfileController);
userRoutes.get("/:id", validIdMiddleware, getUserController);
userRoutes.patch(
  "",
  validTokenMiddleware,
  validIdMiddleware,
  //validUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "",
  validTokenMiddleware,
  validIdMiddleware,
  deleteUserController
);

userRoutes.post("/resetPassword", sendResetEmailPasswordController);
userRoutes.patch(
  "/resetPassword/:token",
  verifyRequestPerSchema(userResetPasswordSchema),
  resetPasswordController
);
userRoutes.post("/upload", uploadImage, async (req, res) => {
  let files = req.files;
  if (Array.isArray(req.files)) {
    // Se req.files for um array, atribui a variável files
    files = req.files;
  } else {
    // Se req.files for um objeto, atribui a variável files o array de arquivos do campo "image"
    files = req.files["image"];
  }
  const uploadResults = [];
  for (const file of files) {
    const upload = await cloudinary.uploader.upload(
      file.path,
      (error, result) => result
    );
    fs.unlink(file.path, (error) => {
      if (error) {
        console.log(error);
      }
    });
    uploadResults.push(upload);
  }
  uploadResults.map((e) => {
    console.log(e.public_id);
  });

  return res.json(uploadResults);

  // let imageFile;
  // let avatarFile;

  // if (req.files["image"]) {
  //   imageFile = req.files["image"][0];
  // }

  // if (req.files["avatar"]) {
  //   avatarFile = req.files["avatar"][0];
  // }

  // const uploadResults = [];

  // if (imageFile) {
  //   const upload = await cloudinary.uploader.upload(imageFile.path);
  //   fs.unlink(imageFile.path, (error) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //   });
  //   uploadResults.push(upload);
  // }

  // if (avatarFile) {
  //   const upload = await cloudinary.uploader.upload(avatarFile.path);
  //   fs.unlink(avatarFile.path, (error) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //   });
  //   uploadResults.push(upload);
  // }

  // return res.json(uploadResults);
});

export default userRoutes;

import { NextFunction, Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

const uploadImg = multer({
  storage: multer.diskStorage({
    destination: "upload",
    filename: (request, file, callback) => {
      const filename = `${file.originalname}`;

      return callback(null, filename);
    },
  }),
});

export const cloudinaryFunction = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.files["avatar"]) {
    const upload = await cloudinary.uploader.upload(
      req.files["avatar"][0].path,
      (error, result) => result
    );
    req.body.avatar = upload.secure_url;
    fs.unlink(req.files["avatar"][0].path, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }

  if (req.files["image"]) {
    const arrayImg = req.files["image"];
    const promises = [];

    arrayImg.forEach((img) => {
      const promise = cloudinary.uploader
        .upload(img.path, (error, result) => result)
        .then((upload) => {
          fs.unlink(img.path, (error) => {
            if (error) {
              console.log(error);
            }
          });
          return upload.secure_url;
        });

      promises.push(promise);
    });

    try {
      const uploadResults = await Promise.all(promises);
      req.body.photos = uploadResults;
    } catch (error) {
      console.log(error);
    }
  }

  next();
};

export const uploadImage = uploadImg.fields([
  { name: "image" },
  { name: "avatar" },
]);

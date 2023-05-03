import multer from "multer";

const uploadImg = multer({
  storage: multer.diskStorage({
    destination: "upload",
    filename: (request, file, callback) => {
      const filename = `${file.originalname}`;

      return callback(null, filename);
    },
  }),
});

export const uploadImage = uploadImg.fields([
  { name: "image" },
  { name: "avatar" },
]);

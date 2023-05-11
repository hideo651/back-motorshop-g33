import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

import { User } from "./entities/user.entity";
import { Announcement } from "./entities/announcement.entity";
import { Photos } from "./entities/photos.entity";
import { Comment } from "./entities/comments.entity";
import { createEntitys1683028907484 } from "./migrations/1683028907484-createEntitys";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [User, Announcement, Photos, Comment],
        migrations: [createEntitys1683028907484],
      }
    : {
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: false,
        entities: [User, Announcement, Photos, Comment],
        migrations: [createEntitys1683028907484],
      }
);

export default AppDataSource;

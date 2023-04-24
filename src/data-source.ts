import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

import { User } from "./entities/user.entity";
import { Announcement } from "./entities/announcement.entity";
import { Photos } from "./entities/photos.entity";
import { InitialEntities1682362328750 } from "./migrations/1682362328750-InitialEntities";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [User, Announcement, Photos],
        migrations: [InitialEntities1682362328750],
      }
);

export default AppDataSource;

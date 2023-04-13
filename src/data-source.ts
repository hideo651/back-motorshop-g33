import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

import { User } from "./entities/user.entity";
import { Announcement } from "./entities/announcement.entity";
import { Photos } from "./entities/photos";
import { createEntities1681410663813 } from "./migrations/1681410663813-createEntities";

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
        migrations: [createEntities1681410663813],
      }
);

export default AppDataSource;

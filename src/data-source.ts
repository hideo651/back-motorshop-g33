import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";
import { createUsersTable1671032457673 } from "./migrations/1671032457673-createUsersTable";
import { User } from "./entities/user.entity";

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
        entities: [User],
        migrations: [createUsersTable1671032457673],
      }
);

export default AppDataSource;

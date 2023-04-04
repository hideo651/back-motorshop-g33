import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Cars } from "./entities/cars.entity";
import { createEntityCar1680623312778 } from "./migrations/1680623312778-createEntityCar";

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
        entities: [User, Cars],
        migrations: [createEntityCar1680623312778],
      }
);

export default AppDataSource;

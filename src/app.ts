import "express-async-errors";
import "reflect-metadata";
import express from "express";
import userRoutes from "./routers/user.routes";
import loginRoutes from "./routers/login.routes";
import handleError from "./errors/HandleError";
import announcementRoutes from "./routers/announcement.routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/announcement", announcementRoutes);

app.use(handleError);

export default app;

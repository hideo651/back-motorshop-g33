import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./routers/user.routes";
import loginRoutes from "./routers/login.routes";
import handleError from "./errors/HandleError";
import announcementRoutes from "./routers/announcement.routes";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/announcement", announcementRoutes);

app.use(handleError);

export default app;

import "dotenv/config";
import express, { json, urlencoded } from "express";
import statusRouter from "./routes/status.route";
import usersRoute from "./routes/users.route";

const PORT = 3000;

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(usersRoute);
app.use(statusRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

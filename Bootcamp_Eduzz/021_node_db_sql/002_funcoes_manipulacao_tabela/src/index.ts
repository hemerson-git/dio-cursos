import "dotenv/config";
import express, { json, urlencoded } from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/auth.route";
import statusRouter from "./routes/status.route";
import usersRoute from "./routes/users.route";

const PORT = 3000;

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

// Routers config
app.use(usersRoute);
app.use(statusRouter);
app.use(authorizationRoute);

// Handlers configs
app.use(errorHandler);

// Start Server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

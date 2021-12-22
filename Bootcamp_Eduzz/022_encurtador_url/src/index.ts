import "dotenv/config";
import express, {
  json,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";
import statsRouter from "./routes/stats.route";
import urlRouter from "./routes/url.route";
import db from "./db";

db.connect();

// API Configs
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes Configs
app.use(statsRouter);
app.use(urlRouter);

app.listen(3000, () => console.log("Listening on port 3000"));

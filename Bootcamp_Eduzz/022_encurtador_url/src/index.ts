import "dotenv/config";
import express, {
  json,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/stats", (req: Request, resp: Response, next: NextFunction) => {
  resp.json({ message: "It's Working" });
});

app.listen(3000, () => console.log("Listening on port 3000"));

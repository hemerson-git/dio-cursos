import express, {
  Request,
  Response,
  NextFunction,
  json,
  urlencoded,
} from "express";
import usersRoute from "./routes/users.route";

const PORT = 3000;

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(usersRoute);

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Tudo Funcionando" });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

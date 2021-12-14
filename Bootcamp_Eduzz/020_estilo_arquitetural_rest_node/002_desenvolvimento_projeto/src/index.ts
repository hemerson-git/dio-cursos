import express, { Request, Response, NextFunction } from "express";
const PORT = 3000;

const app = express();

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Tudo Funcionando" });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

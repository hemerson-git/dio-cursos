import { Router, Request, Response, NextFunction } from "express";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Hemerson" }];
  res.json(users);
});

usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    res.status(200).json({ id: uuid });
  }
);

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  const newUser = {
    name,
    email,
    password,
  };

  res.status(201).json(newUser);
});

export default usersRoute;

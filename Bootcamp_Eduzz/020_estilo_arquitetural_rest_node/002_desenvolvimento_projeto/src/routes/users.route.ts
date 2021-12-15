import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Hemerson" }];
  res.json(users);
});

usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    res.status(StatusCodes.OK).json({ id: uuid });
  }
);

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  const newUser = {
    name,
    email,
    password,
  };

  res.status(StatusCodes.CREATED).json(newUser);
});

usersRoute.put(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const { uuid } = req.params;

    const updatedUser = {
      uuid,
      name,
    };

    res.status(StatusCodes.OK).json(updatedUser);
  }
);

usersRoute.delete(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;

    res.status(StatusCodes.OK).json({ uuid });
  }
);

export default usersRoute;

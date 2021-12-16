import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

usersRoute.get(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.json(users);
  }
);

usersRoute.get(
  "/users/:uuid",
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;

    try {
      const user = await userRepository.findById(uuid);

      if (!user) {
        res.status(400).json({ message: "User not found" });
      }

      res.status(StatusCodes.OK).json(user);
    } catch ({ message, status }) {
      res.status(500).json({ message, status });
    }
  }
);

usersRoute.post(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const newUser = {
      username,
      password,
    };

    const userId = await userRepository.create(newUser);

    res.status(StatusCodes.CREATED).json(userId);
  }
);

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

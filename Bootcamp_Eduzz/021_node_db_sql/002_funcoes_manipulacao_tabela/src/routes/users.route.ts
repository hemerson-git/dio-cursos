import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database.error.model";
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
        res.sendStatus(StatusCodes.BAD_REQUEST);
      }

      res.status(StatusCodes.OK).json(user);
    } catch (error) {
      if (error instanceof DatabaseError) {
        res.sendStatus(StatusCodes.BAD_REQUEST);
      }

      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
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
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    const { uuid } = req.params;

    const modifiedUser = {
      uuid,
      username,
      password,
    };

    await userRepository.update(modifiedUser);

    res
      .status(StatusCodes.OK)
      .json({ uuid: modifiedUser.uuid, username: modifiedUser.username });
  }
);

usersRoute.delete(
  "/users/:uuid",
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const { uuid } = req.params;

    await userRepository.remove(uuid);

    res.status(StatusCodes.OK).send();
  }
);

export default usersRoute;

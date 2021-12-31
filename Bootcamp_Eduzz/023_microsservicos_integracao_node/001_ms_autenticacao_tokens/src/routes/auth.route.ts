import { NextFunction, Request, Response, Router } from "express";
import JWT, { SignOptions } from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import basicAuthMiddleware from "../middlewares/basic-auth.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";
import jwtAuthMiddleware from "../middlewares/jwt-auth.middleware";

const authorizationRoute = Router();
const { SECRET_KEY } = process.env;

authorizationRoute.post(
  "/token",
  basicAuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req;

    if (!user) {
      throw new ForbiddenError("Usuário ou Senha inválidos!");
    }

    try {
      const tokenExpiration = "15m";
      const jwtPayload = { username: user.username };
      const jwtOptions: SignOptions = {
        subject: user.uuid,
        expiresIn: tokenExpiration,
      };

      const secretKey = String(SECRET_KEY);

      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

      res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);

authorizationRoute.post(
  "/token/validate",
  jwtAuthMiddleware,
  (req: Request, resp: Response, next: NextFunction) => {
    resp.sendStatus(StatusCodes.OK);
  }
);

export default authorizationRoute;

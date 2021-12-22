import { Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from "jsonwebtoken";

async function bearerAuthMiddleware(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new ForbiddenError(
        "Você não tem permissão para acessar essa página"
      );
    }

    const [authType, token] = authHeader.split(" ");

    if (authType !== "Bearer" || !token) {
      throw new ForbiddenError("Token Inválido");
    }

    const tokenPayload = JWT.verify(token, "my_secret_key");

    if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
      throw new ForbiddenError("Token Inválido!");
    }

    const user = {
      uuid: tokenPayload.sub,
      username: tokenPayload.username,
    };

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
}

export default bearerAuthMiddleware;

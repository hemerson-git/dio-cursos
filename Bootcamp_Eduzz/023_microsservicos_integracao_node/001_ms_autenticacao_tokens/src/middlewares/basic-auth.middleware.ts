import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

async function basicAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      throw new ForbiddenError(
        "Você não tem permissão para acessar essa página"
      );
    }

    const [authtype, token] = authorizationHeader.split(" ");

    if (!token || authtype !== "Basic") {
      throw new ForbiddenError("Usuário ou senha inválidos!");
    }

    const tokenContent = Buffer.from(token, "base64").toString("utf8");

    const [username, password] = tokenContent.split(":");

    if (!username || !password) {
      throw new ForbiddenError("Usuário ou senha inválidos!");
    }

    const user = await userRepository.findByUsernameAndPassword(
      username,
      password
    );

    if (!user) {
      throw new ForbiddenError("Usuário ou senha inválidos!");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

export default basicAuthMiddleware;

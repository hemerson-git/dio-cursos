import { Router, Request, Response, NextFunction } from "express";

const statsRouter = Router();

statsRouter.get(
  "/stats",
  (req: Request, resp: Response, next: NextFunction) => {
    resp.status(200).json({ message: "Service Working!" });
  }
);

export default statsRouter;

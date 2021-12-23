import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const statusRouter = Router();

statusRouter.get("/status", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: "Service Working!" });
});

export default statusRouter;

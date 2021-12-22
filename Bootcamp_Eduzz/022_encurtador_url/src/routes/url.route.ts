import { Router, Request, Response, NextFunction } from "express";
import URLController from "../controllers/url.controller";

const urlRouter = Router();

const urlController = new URLController();

urlRouter.post("/shorten", urlController.shorten);
urlRouter.get("/redirect/:id", urlController.redirect);

export default urlRouter;

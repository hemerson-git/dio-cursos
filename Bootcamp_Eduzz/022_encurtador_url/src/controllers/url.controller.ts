import { NextFunction, Request, Response } from "express";

class URLController {
  public async shorten(req: Request, resp: Response, next: NextFunction) {
    const originalURL = req.body;
  }
}

export default URLController;

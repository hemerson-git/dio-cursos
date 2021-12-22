import { NextFunction, Request, Response } from "express";
import shortid from "shortid";

class URLController {
  public async shorten(req: Request, resp: Response, next: NextFunction) {
    const { original_url } = req.body;
    const hash = shortid.generate();
    const { API_URL } = process.env;

    const shortenURL = `${API_URL}/${hash}`;

    resp.json({ shortenURL, original_url });
  }

  public async redirect(req: Request, resp: Response, next: NextFunction) {
    const { hash } = req.params;

    const url = {
      originUrl: "https://www.netflix.com",
    };

    resp.redirect(url.originUrl);
  }
}

export default URLController;

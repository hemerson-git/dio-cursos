import { NextFunction, Request, Response } from "express";
import shortid from "shortid";
import { URLModel } from "../models/URL";

class URLController {
  public async shorten(req: Request, resp: Response, next: NextFunction) {
    const { original_url } = req.body;
    const hash = shortid.generate();
    const url = await URLModel.findOne({ original_url });

    if (url) {
      resp.json(url);
      return;
    }

    const { API_URL } = process.env;

    const shortURL = `${API_URL}/${hash}`;
    const newURL = await URLModel.create({ hash, shortURL, original_url });
    resp.json(newURL);
  }

  public async redirect(req: Request, resp: Response, next: NextFunction) {
    const { id: hash } = req.params;

    const url = await URLModel.findOne({ hash });

    if (url && url.original_url) {
      resp.redirect(url.original_url);
      return;
    }

    resp.sendStatus(401);
  }
}

export default URLController;

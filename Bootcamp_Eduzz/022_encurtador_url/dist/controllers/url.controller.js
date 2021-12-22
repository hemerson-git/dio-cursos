"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = __importDefault(require("shortid"));
const URL_1 = require("../models/URL");
class URLController {
    async shorten(req, resp, next) {
        const { original_url } = req.body;
        const url = await URL_1.URLModel.findOne({ original_url });
        if (url) {
            resp.json(url);
            return;
        }
        const hash = shortid_1.default.generate();
        const { API_URL } = process.env;
        const shortenURL = `${API_URL}/${hash}`;
        const newURL = await URL_1.URLModel.create(hash, shortenURL, original_url);
        resp.json(newURL);
    }
    async redirect(req, resp, next) {
        const { hash } = req.params;
        const url = {
            originUrl: "https://www.netflix.com",
        };
        resp.redirect(url.originUrl);
    }
}
exports.default = URLController;

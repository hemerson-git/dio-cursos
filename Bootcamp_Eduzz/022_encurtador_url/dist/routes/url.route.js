"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_controller_1 = __importDefault(require("../controllers/url.controller"));
const urlRouter = (0, express_1.Router)();
const urlController = new url_controller_1.default();
urlRouter.post("/shorten", urlController.shorten);
urlRouter.get("/redirect/:id", urlController.redirect);
exports.default = urlRouter;

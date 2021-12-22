"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statsRouter = (0, express_1.Router)();
statsRouter.get("/stats", (req, resp, next) => {
    resp.status(200).json({ message: "Service Working!" });
});
exports.default = statsRouter;

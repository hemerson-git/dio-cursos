"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { CONNECT_URL } = process.env;
class MongoConnection {
    async connect() {
        try {
            if (CONNECT_URL) {
                await mongoose_1.default.connect(CONNECT_URL);
                console.log("Connected to Mongo!");
            }
        }
        catch (error) {
            throw new Error("Erro Interno");
        }
    }
}
const db = new MongoConnection();
exports.default = db;

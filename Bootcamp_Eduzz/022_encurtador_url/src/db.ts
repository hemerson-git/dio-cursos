import mongoose from "mongoose";

const { CONNECT_URL } = process.env;

class MongoConnection {
  async connect(): Promise<void> {
    try {
      if (CONNECT_URL) {
        await mongoose.connect(CONNECT_URL);
        console.log("Connected to Mongo!");
      }
    } catch (error) {
      throw new Error("Erro Interno");
    }
  }
}

const db = new MongoConnection();

export default db;

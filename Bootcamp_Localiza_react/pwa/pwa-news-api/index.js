import express from "express";
import cors from "cors";

import economy from "./economy.json";
import technology from "./technology.json";
import words from "./world.json";

const GROUP_NEWS = {
  economy,
  technology,
  world,
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    GROUP_NEWS,
  });
});

app.listen(PORT, () => {
  console.log();
});

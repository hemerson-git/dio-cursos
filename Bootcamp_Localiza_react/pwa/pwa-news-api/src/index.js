import express, { json } from "express";
import cors from "cors";

import economy from "./economy.json";
import technology from "./technology.json";
import world from "./world.json";

const GROUP_NEWS = {
  economy,
  technology,
  world,
};

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(json());

app.get("/api", (req, res) => {
  return res.json({
    GROUP_NEWS,
  });
});

app.get("/api/:subject", (req, res) => {
  const { subject } = req.params;
  return res.json(GROUP_NEWS[subject]);
});

app.use("api/:subject/:id", (req, res) => {
  const { subject, id } = req.params;
  const allNews = GROUP_NEWS[subject];
  const news = allNews.filter((news) => news.id === id);
  return res.json(news);
});

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});

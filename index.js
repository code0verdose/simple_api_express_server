import { products } from "./data/products/cardsData.js";
import { emoji } from "./data/emoji/emoji.js";
import { emojiHard } from "./data/emojiHard/emojiHard.js";
import express from "express";
import cors from "cors";
const app = express();
const port = 7000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/emoji/v1", cors(), (req, res) => {
  res.json(emoji);
});

app.get("/api/emoji/v1/find", cors(), (req, res) => {
  const searchQuery = req.query['query'].replace(/"/g, "");
  const result = emoji.filter(
    (el) =>
      el.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.keywords.toLowerCase().includes(searchQuery.toLowerCase())
  );
  res.json(result);
});

app.get("/api/emoji/v2", cors(), (req, res) => {
  res.json(emojiHard);
});

app.get("/api/products/all", cors(), (req, res) => {
  res.json(products);
});

app.get("/api/products/instock", cors(), (req, res) => {
  const instock = products.filter((el) => el.qty > 0);
  res.json(instock);
});

app.get("/api/products/find", cors(), (req, res) => {
  const searchQuery = req.query['desc'].replace(/"/g, "");
  const result = products.filter((el) => el.description.includes(searchQuery));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/comments", (req, res) => {
  const data = fs.readFileSync("comments.json", "utf-8");
  res.json(JSON.parse(data));
});

app.post("/api/comments", (req, res) => {
  const newComment = req.body;
  const data = fs.readFileSync("comments.json", "utf-8");
  const comments = JSON.parse(data);
  comments.push(newComment);
  fs.writeFileSync("comments.json", JSON.stringify(comments, null, 2));
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const readFunction = require("./module/module.js");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/women", (req, res) => {
  try {
    res.end(JSON.stringify(JSON.parse(readFunction("card"))));
  } catch (error) {
    res.end(error.message);
  }
});
app.get("/men", (req, res) => {
  try {
    res.end(JSON.stringify(JSON.parse(readFunction("men"))));
  } catch (error) {
    res.end(error.message);
  }
});
app.get("/search", (req, res) => {
  try {
    res.end(JSON.stringify(JSON.parse(readFunction("search"))));
  } catch (error) {
    res.end(error.message);
  }
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

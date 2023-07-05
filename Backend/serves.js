const express = require("express");
const readFunction = require("./module/module.js");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  try {
    res.end(JSON.stringify(JSON.parse(readFunction("card"))));
  } catch (error) {
    res.end(error.message);
  }
});
app.listen(3000, () => {
  console.log("server running 3000");
});

const express = require("express");
const readFunction = require("./module/module.js");

const app = express();
app.use(express.json());
// app.use(cors)
app.get("/women", (req, res) => {
  try {
    res.status(204).end("Welcome to Api");
    res.end(JSON.stringify(JSON.parse(readFunction("card"))));
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  } catch (error) {
    res.end(error.message);
  }
});
app.listen(3000, () => {
  console.log("server running 3000");
});

const express = require("express");
const cors = require("cors");
const readFunction = require("./module/module.js");

const app = express();
app.use(express.json());

app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/women", (req, res) => {
  try {
    res.end(JSON.stringify(JSON.parse(readFunction("card"))));
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

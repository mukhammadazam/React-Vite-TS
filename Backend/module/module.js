const fs = require("fs");
const path = require("path");

const readFunction = (read) => {
  return fs.readFileSync(
    path.join(process.cwd(),  "../src", "db/" + read + ".json")
  );
};
module.exports = readFunction;

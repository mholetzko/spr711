let fs = require("fs");
const Food = JSON.parse(fs.readFileSync("season.json"))["Food"];
console.log(Food);
module.exports = {
  Food,
};

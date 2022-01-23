const { readFileSync, writeFileSync } = require("fs");

const read = readFileSync("./content/sub-content/text.txt", "utf-8");
console.log(read);

const write = writeFileSync("./content/sub-content/text.txt", "Hello", {
  flag: "a",
});

const { readFile, writeFile, read } = require("fs");

readFile("./content/sub-content/text.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
});

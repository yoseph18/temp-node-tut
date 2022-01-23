const path = require("path");

const filepath = path.join("/content", "./content/sub-content", "text.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "sub-content", "text.txt");
console.log(absolute);

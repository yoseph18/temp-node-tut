const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello this the home page");
  } else if (req.url == "/content") {
    res.end("this is the content");
  } else {
    res.end(`<h1>Page not found</h1><br/><a href="/">Home</a>`);
  }
});

server.listen("3000");

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./views/index.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.end("Server Error");
      }
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

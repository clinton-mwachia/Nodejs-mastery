const http = require("http");
const fs = require("fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  if (req.url === "/style.css") {
    const filePath = path.join(__dirname, "public", "style.css");
    fs.readFile(filePath, (err, data) => {
      if (err) return res.end("Error loading CSS");
      res.setHeader("Content-Type", "text/css");
      res.end(data);
    });
  } else {
    res.end('<link rel="stylesheet" href="/style.css"><h1>Styled Page</h1>');
  }
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

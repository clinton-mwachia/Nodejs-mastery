const http = require("node:http");

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    res.end("🏠 Home Page");
  } else if (url === "/about") {
    res.end("📖 About Page");
  } else {
    res.statusCode = 404;
    res.end("❌ Not Found");
  }
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

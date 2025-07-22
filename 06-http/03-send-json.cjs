const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hello from API", status: "ok" }));
  } else {
    res.end("Try /api");
  }
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

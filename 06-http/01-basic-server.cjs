const http = require("node:http");

const server = http.createServer((req, res) => {
  res.write("Hello World from Node.js!");
  res.end();
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

const http = require("node:http");
const { URL } = require("node:url");

// try this in the browser:
// http://localhost:3000/products?page=5&size=10

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  const pathname = reqUrl.pathname;
  const params = reqUrl.searchParams;

  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      path: pathname,
      query: Object.fromEntries(params),
    })
  );
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

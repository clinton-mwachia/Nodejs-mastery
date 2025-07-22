const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      const parsed = new URLSearchParams(body);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(Object.fromEntries(parsed)));
    });
  } else {
    res.end(`<form method="POST" action="/submit">
      <input name="name" placeholder="Your name"/>
      <button>Submit</button>
    </form>`);
  }
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

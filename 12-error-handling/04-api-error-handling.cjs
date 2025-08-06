const http = require("node:http");

http
  .get("http://invalid-url", (res) => {
    console.log("✅ Connected");
  })
  .on("error", (err) => {
    console.error("🌐 Request failed:", err.message);
  });

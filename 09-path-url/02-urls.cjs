const { URL } = require("node:url");

const myURL = new URL(
  "https://example.com:8080/products?page=2&limit=10#reviews"
);

console.log("🌐 Full URL:", myURL.href);
console.log("🧭 Protocol:", myURL.protocol); // https:
console.log("📦 Host:", myURL.host); // example.com:8080
console.log("🏠 Hostname:", myURL.hostname); // example.com
console.log("📍 Port:", myURL.port); // 8080
console.log("🛣️ Pathname:", myURL.pathname); // /products
console.log("🔍 Search:", myURL.search); // ?page=2&limit=10
console.log("🪝 Hash:", myURL.hash); // #reviews

// Query Params
console.log("📄 Page param:", myURL.searchParams.get("page")); // 2
myURL.searchParams.set("page", "3");
console.log("📄 Updated URL:", myURL.toString());

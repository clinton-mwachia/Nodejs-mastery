const fs = require("node:fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    return console.error("❌ Read error:", err.message);
  }
  console.log("✅ File contents:", data);
});

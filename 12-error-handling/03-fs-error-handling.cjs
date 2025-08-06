const fs = require("node:fs");

fs.readFile("nonexistent.txt", "utf8", (err, data) => {
  if (err) {
    console.error("📄 File read error:", err.message);
  } else {
    console.log(data);
  }
});

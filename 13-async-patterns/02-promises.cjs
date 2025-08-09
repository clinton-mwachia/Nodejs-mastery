const fs = require("node:fs").promises;

fs.readFile("sample.txt", "utf8")
  .then((data) => {
    console.log("✅ File:", data);
  })
  .catch((err) => {
    console.error("❌ Error:", err.message);
  });

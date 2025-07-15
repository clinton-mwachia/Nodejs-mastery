const fs = require("node:fs");

fs.mkdir("logs", { recursive: true }, (err) => {
  if (err) return console.error("Error creating folder:", err.message);
  console.log("logs folder created");
});

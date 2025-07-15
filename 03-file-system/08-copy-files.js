const fs = require("node:fs");

fs.copyFile("sample.txt", "sample_copy.txt", (err) => {
  if (err) return console.error("Copy failed:", err.message);
  console.log("sample.txt copied to sample_copy.txt");
});

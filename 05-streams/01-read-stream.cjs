const fs = require("node:fs");

const readStream = fs.createReadStream("large.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("🧩 Received chunk:", chunk.length);
});

readStream.on("end", () => {
  console.log("✅ Done reading.");
});

readStream.on("error", (err) => {
  console.error("❌ An error occurred:", err);
  if (err.code === "ENOENT") {
    console.error('The file "large.txt" was not found.');
  } else if (err.code === "EACCES") {
    console.error('Permission denied to access "large.txt".');
  }
});

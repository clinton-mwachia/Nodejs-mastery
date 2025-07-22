const fs = require("node:fs");

const readStream = fs.createReadStream("large.txt");
const writeStream = fs.createWriteStream("copied.txt");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("✅ File copied using pipe.");
});

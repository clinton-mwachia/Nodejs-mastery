const fs = require("node:fs");
const zlib = require("node:zlib");

const input = fs.createReadStream("large.txt");
const output = fs.createWriteStream("large.txt.gz");

input.pipe(zlib.createGzip()).pipe(output);

output.on("close", () => {
  console.log("✅ File compressed to large.txt.gz");
});

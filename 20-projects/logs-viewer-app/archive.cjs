const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

function archiveLogs() {
  const input = fs.createReadStream("./logs/server.log");
  const output = fs.createWriteStream("./logs/server.log.gz");

  input
    .pipe(zlib.createGzip())
    .pipe(output)
    .on("finish", () => {
      console.log("✅ Log file archived → server.log.gz");
    });
}

module.exports = archiveLogs;

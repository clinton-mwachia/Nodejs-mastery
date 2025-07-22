const fs = require("fs");
const readline = require("readline");
const { Transform } = require("stream");
const path = require("path");

function filterLogs(keyword) {
  const input = fs.createReadStream("./logs/server.log", "utf8");
  const output = fs.createWriteStream("./output/filtered.log");

  const filter = new Transform({
    transform(chunk, encoding, callback) {
      const lines = chunk.toString().split("\n");
      const matches = lines.filter((line) => line.includes(keyword));
      this.push(matches.join("\n") + "\n");
      callback();
    },
  });

  input
    .pipe(filter)
    .pipe(output)
    .on("finish", () => {
      console.log(`✅ Logs filtered by "${keyword}" → output/filtered.log`);
    });
}

module.exports = filterLogs;

const fs = require("node:fs");

const writeStream = fs.createWriteStream("output.txt");

for (let i = 0; i < 5; i++) {
  writeStream.write(`Line ${i + 1}: Hello stream!\n`);
}

writeStream.end(() => {
  console.log("✅ Writing complete.");
});

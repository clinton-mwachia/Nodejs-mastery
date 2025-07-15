const fs = require("node:fs");

const moreData = "\nThis line was appended using fs.appendFile.";

fs.appendFile("newfile.txt", moreData, (err) => {
  if (err) {
    console.error("Error appending to file:", err.message);
    return;
  }
  console.log("Content appended to newfile.txt.");
});

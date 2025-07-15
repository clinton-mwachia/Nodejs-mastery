const fs = require("node:fs");

fs.watchFile("sample.txt", (curr, prev) => {
  console.log("sample.txt has been modified");
  console.log("Previous modified time:", prev.mtime);
  console.log("Current modified time:", curr.mtime);
});

// Open sample.txt and edit it to see this in action.

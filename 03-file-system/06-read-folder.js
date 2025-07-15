const fs = require("node:fs");

fs.readdir(".", (err, files) => {
  if (err) return console.error("Error reading directory:", err.message);

  console.log("Files in current directory:");
  files.forEach((file) => console.log(file));
});

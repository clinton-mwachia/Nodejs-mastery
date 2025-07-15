const fs = require("node:fs");

const content = "This is a new file created using fs.writeFile.";

fs.writeFile("newfile.txt", content, (err) => {
  if (err) {
    console.error("Error writing file:", err.message);
    return;
  }
  console.log("newfile.txt created successfully.");
});

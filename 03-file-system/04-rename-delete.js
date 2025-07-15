const fs = require("fs");

// Rename file
fs.rename("newfile.txt", "renamed_file.txt", (err) => {
  if (err) return console.error("Rename failed:", err.message);
  console.log("File renamed to renamed_file.txt");

  // Delete file
  fs.unlink("renamed_file.txt", (err) => {
    if (err) return console.error("Delete failed:", err.message);
    console.log("renamed_file.txt deleted.");
  });
});

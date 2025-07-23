const path = require("node:path");

console.log("📁 Current File:", __filename);
console.log("📂 Current Dir:", __dirname);

// Join paths
const fullPath = path.join(__dirname, "assets", "images", "logo.png");
console.log("🔗 Joined Path:", fullPath);

// Get file name
console.log("📄 File Name:", path.basename(fullPath)); // logo.png

// Get directory name
console.log("📁 Directory Name:", path.dirname(fullPath));

// Get extension
console.log("🧩 Extension:", path.extname(fullPath)); // .png

// Parse path into parts
console.log("🧩 Parsed Path:", path.parse(fullPath));

// Format path from object
const formatted = path.format({
  root: "/",
  dir: "/assets/images",
  base: "logo.png",
});
console.log("🧱 Formatted Path:", formatted);

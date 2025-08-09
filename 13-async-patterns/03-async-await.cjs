const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("sample.txt", "utf8");
    console.log("📄 Content:", data);
  } catch (err) {
    console.error("❌ Failed to read:", err.message);
  }
}

readFile();

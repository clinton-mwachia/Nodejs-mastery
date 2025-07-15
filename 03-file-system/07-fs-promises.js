const fs = require("node:fs").promises;

async function handleFile() {
  try {
    await fs.writeFile("notes.txt", "Promise-based write.");
    const data = await fs.readFile("notes.txt", "utf8");
    console.log("notes.txt contents:", data);
  } catch (err) {
    console.error("Promise error:", err.message);
  }
}

handleFile();

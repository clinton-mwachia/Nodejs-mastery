const fs = require("fs").promises;

async function readMultiple() {
  try {
    const [a, b] = await Promise.all([
      fs.readFile("a.txt", "utf8"),
      fs.readFile("b.txt", "utf8"),
    ]);
    console.log("📦 File A:", a);
    console.log("📦 File B:", b);
  } catch (err) {
    console.error("❌ Error in one of the reads:", err.message);
  }
}

readMultiple();

const fs = require("fs").promises;

async function readInOrder() {
  try {
    const a = await fs.readFile("a.txt", "utf8");
    console.log("📘 Step 1:", a);

    const b = await fs.readFile("b.txt", "utf8");
    console.log("📘 Step 2:", b);
  } catch (err) {
    console.error("❌ Sequential error:", err.message);
  }
}

readInOrder();

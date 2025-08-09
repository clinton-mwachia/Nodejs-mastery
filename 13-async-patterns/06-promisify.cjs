const { readFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);

readFileAsync("sample.txt", "utf8")
  .then((data) => console.log("📃 Promisified:", data))
  .catch((err) => console.error("❌ Error:", err.message));

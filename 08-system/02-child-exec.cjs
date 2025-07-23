const { exec } = require("node:child_process");

exec("ls -l", (err, stdout, stderr) => {
  if (err) {
    console.error("❌ Error:", err.message);
    return;
  }
  if (stderr) {
    console.error("⚠️ stderr:", stderr);
    return;
  }
  console.log("📄 Output:\n", stdout);
});

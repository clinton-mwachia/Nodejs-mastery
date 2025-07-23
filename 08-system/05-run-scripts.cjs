const { exec } = require("node:child_process");

exec("node 01-os-info.cjs", (err, stdout, stderr) => {
  if (err) return console.error(err.message);
  console.log("📤 Output from another script:\n" + stdout);
});

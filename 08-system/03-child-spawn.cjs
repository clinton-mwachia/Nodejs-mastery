const { spawn } = require("node:child_process");

const child = spawn("ping", ["-n", "4", "google.com"]);

child.stdout.on("data", (data) => {
  console.log(`📡 ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`⚠️ ${data}`);
});

child.on("close", (code) => {
  console.log(`✅ Process exited with code ${code}`);
});

// Simulated backup task
const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const file = path.join(__dirname, "../logs", `backup-${Date.now()}.txt`);
fs.writeFileSync(file, "🗄️ Backup completed at " + new Date().toISOString());

console.log("📦 Backup saved:", file);

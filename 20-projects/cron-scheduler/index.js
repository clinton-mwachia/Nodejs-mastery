const fs = require("node:fs");
const path = require("node:path");
const { exec } = require("node:child_process");

const logsDir = path.join(__dirname, "logs");
const logFile = path.join(logsDir, "scheduler.log");

// Create logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

function log(message) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, entry);
  console.log(entry.trim());
}

// Schedule table
const schedule = [
  {
    task: "backup",
    interval: 1, // every 1 minute
    lastRun: 0,
  },
  {
    task: "report",
    interval: 5, // every 5 minutes
    lastRun: 0,
  },
];

function runTask(taskName) {
  const taskPath = path.join(__dirname, "tasks", `${taskName}.js`);
  exec(`node "${taskPath}"`, (err, stdout, stderr) => {
    if (err) return log(`❌ Error in task "${taskName}": ${err.message}`);
    if (stderr) return log(`⚠️  Task "${taskName}" stderr: ${stderr}`);
    log(`✅ Task "${taskName}" executed. Output: ${stdout.trim()}`);
  });
}

// Cron loop: check every 30 seconds
setInterval(() => {
  const now = Date.now();

  schedule.forEach((task) => {
    const elapsedMinutes = (now - task.lastRun) / 60000;
    if (elapsedMinutes >= task.interval) {
      task.lastRun = now;
      runTask(task.task);
    }
  });
}, 30 * 1000); // every 30 sec

console.log("🚀 Cron-like scheduler running...");
log("🔁 Scheduler started.");

const EventEmitter = require("node:events");
const fs = require("node:fs");
const path = require("node:path");

class Logger extends EventEmitter {
  constructor() {
    super();
    this.logFile = path.join(__dirname, "logs.txt");
    this.on("log", this.writeLog);
  }

  log(message) {
    const logEntry = `[${new Date().toISOString()}] ${message}\n`;
    this.emit("log", logEntry);
  }

  writeLog(message) {
    fs.appendFile(this.logFile, message, (err) => {
      if (err) console.error("Logging error:", err.message);
    });
  }
}

module.exports = new Logger();

const EventEmitter = require("node:events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("log", { message, time: new Date().toLocaleTimeString() });
  }
}

const logger = new Logger();

logger.on("log", (data) => {
  console.log(`[${data.time}] ${data.message}`);
});

logger.log("Server started...");
logger.log("Database connected...");

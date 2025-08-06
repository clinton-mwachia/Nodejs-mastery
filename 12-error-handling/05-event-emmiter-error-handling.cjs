const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("error", (err) => {
  console.error("📣 Caught event error:", err.message);
});

emitter.emit("error", new Error("Something went wrong in an event"));

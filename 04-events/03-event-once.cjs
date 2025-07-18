const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.once("init", () => {
  console.log("Initialization complete.");
});

emitter.emit("init"); // works
emitter.emit("init"); // ignored

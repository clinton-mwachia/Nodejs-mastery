const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello from event!");
});

// try changing greet > greets [nothing will be printed]
emitter.emit("greet");

const EventEmitter = require("node:events");
const emitter = new EventEmitter();

function onLaunch() {
  console.log("Launched!");
}

emitter.on("launch", onLaunch);
emitter.emit("launch"); // → Launched!

emitter.removeListener("launch", onLaunch);
emitter.emit("launch"); // → nothing

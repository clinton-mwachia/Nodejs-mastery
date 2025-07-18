const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("userLogin", (username) => {
  console.log(`${username} has logged in.`);
});

emitter.emit("userLogin", "clinton");

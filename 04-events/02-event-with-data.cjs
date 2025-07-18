const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("userLogin", (username) => {
  console.log(`${username}: has logged in.`);
});

emitter.on("userLogin", (...args) => {
  const parameters = args.join(", ");
  console.log(`user details: ${parameters}`);
});

//console.log(emitter.listeners("userLogin"));

//emitter.emit("userLogin", "clinton");

emitter.emit("userLogin", "clinton", "moshe", 10);

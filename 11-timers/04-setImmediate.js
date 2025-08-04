console.log("📦 Start");

setImmediate(() => {
  console.log("📌 This runs after current I/O but before timers");
});

console.log("📦 End");

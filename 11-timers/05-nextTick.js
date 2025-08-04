console.log("🔵 Start");

process.nextTick(() => {
  console.log("🔁 This runs before other timers");
});

console.log("🔵 End");

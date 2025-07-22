console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");

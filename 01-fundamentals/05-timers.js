// Timers in Node.js

console.log("Start");

setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);

// Stop the interval after 7 seconds
setTimeout(() => {
  console.log("Stopping interval...");
  process.exit(); // Stop program
}, 7000);

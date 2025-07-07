// Working with the process object
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("PID:", process.pid);

// Gracefully handle exit
process.on("exit", () => {
  console.log("Exiting process...");
});

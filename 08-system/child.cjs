process.on("message", (msg) => {
  if (msg.action === "greet") {
    process.send(`Hello, ${msg.name} 👋 from child!`);
  }
});

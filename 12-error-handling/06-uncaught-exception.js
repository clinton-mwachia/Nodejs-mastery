process.on("uncaughtException", (err) => {
  console.error("💥 Uncaught Exception:", err.message);
  process.exit(1); // Always exit on unhandled errors
});

throw new Error("Unexpected crash!");

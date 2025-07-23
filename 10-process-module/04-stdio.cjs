// Run: node 04-stdio.js
// Then type input and press Enter

console.log("⌨️ Please type something and press Enter:");

process.stdin.setEncoding("utf8");

process.stdin.on("data", (data) => {
  const input = data.trim();
  if (input === "exit") {
    console.log("👋 Exiting...");
    process.exit(0);
  }
  console.log(`🔁 You typed: ${input}`);
});

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "🧮 Enter calculation (e.g., 5 + 3): ",
});

console.log("📟 Node.js Calculator");
console.log('Type "exit" or "quit" to close.\n');
rl.prompt();

rl.on("line", (input) => {
  const trimmed = input.trim();

  if (trimmed === "exit" || trimmed === "quit") {
    console.log("👋 Goodbye!");
    return rl.close();
  }

  try {
    // Simple parser: split by spaces
    const [a, operator, b] = trimmed.split(" ");
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("❌ Invalid numbers");
    } else {
      let result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 === 0 ? "❌ Cannot divide by zero" : num1 / num2;
          break;
        case "**":
          result = num1 ** num2;
          break;
        default:
          result = "❓ Unknown operator";
      }
      console.log("✅ Result:", result);
    }
  } catch (err) {
    console.log("⚠️ Error:", err.message);
  }

  rl.prompt();
});

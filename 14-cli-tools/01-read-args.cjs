const args = process.argv.slice(2); // ignore node & script path
if (args.length === 0) {
  console.log("Usage: greet <name>");
  process.exit(1);
}

console.log(`Hello, ${args[0]}! 👋`);

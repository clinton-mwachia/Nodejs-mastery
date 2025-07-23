// Run: node 01-cli-args.cjs hello world

console.log("📦 All args:", process.argv);

const args = process.argv.slice(2);
console.log("🔢 Custom args:", args);

if (args.length === 0) {
  console.log("⚠️  No input given!");
} else {
  args.forEach((arg, index) => {
    console.log(`Arg ${index + 1}: ${arg}`);
  });
}

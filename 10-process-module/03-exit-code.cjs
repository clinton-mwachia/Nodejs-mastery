const input = process.argv[2];

if (!input) {
  console.error("❌ Missing required input.");
  process.exit(1); // 1 = error
}

console.log("✅ All good.");
process.exit(0); // success

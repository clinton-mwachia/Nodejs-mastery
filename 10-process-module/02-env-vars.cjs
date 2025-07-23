// Run: NAME=Clinton node 02_env_vars.cjs (Linux/Mac)
// On Windows (CMD): set NAME=Clinton
// > node 02-env-vars.cjs

const name = process.env.NAME || "Guest";

console.log(`👋 Hello, ${name}!`);

if (process.env.NODE_ENV === "production") {
  console.log("🚀 Running in production mode");
} else {
  console.log("⚙️ Development mode");
}

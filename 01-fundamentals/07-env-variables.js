// Access environment variables
// Run with
// POWERSHELL:
// $env:NAME = "Clinton"
// node 07-env-variables.js

const fname = process.env.NAME || "Guest";

console.log(`Hello, ${fname}!`);

// Read command-line arguments
// Example: node 06-command-line-args.js clinton 24

const args = process.argv.slice(2); // Skip node and filename

const fname = args[0];
const age = args[1];

console.log(`Hello ${fname}, you are ${age} years old.`);

// Using a built-in module
const path = require("node:path");

console.log("Filename:", path.basename(__filename));
console.log("Directory:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));

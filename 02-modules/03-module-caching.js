const counter = require("./counter");

console.log("First call:", counter.increment()); // 1
console.log("Second call:", counter.increment()); // 2

// Require again to test cache
const counter2 = require("./counter");
console.log("Third call (cached):", counter2.increment()); // 3

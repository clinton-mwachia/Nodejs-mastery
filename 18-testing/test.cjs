const assert = require("assert");
const { add } = require("./math.cjs");

// Basic assertion
assert.strictEqual(add(2, 3), 5, "2 + 3 should equal 5");

// This will throw if it fails
assert.notStrictEqual(add(2, 2), 5, "2 + 2 should not equal 5");

console.log("All tests passed ✅");

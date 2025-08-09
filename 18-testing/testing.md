## 1. Using Node’s core `assert` module

The `assert` module is built into Node, no install needed.

**math.js**

```js
// A simple add function
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

**test.js**

```js
const assert = require("assert");
const { add } = require("./math");

// Basic assertion
assert.strictEqual(add(2, 3), 5, "2 + 3 should equal 5");

// This will throw if it fails
assert.notStrictEqual(add(2, 2), 5, "2 + 2 should not equal 5");

console.log("All tests passed ✅");
```

Run with:

```bash
node test.js
```

---

## 2. Mocha + Chai

Mocha is a **test runner**.
Chai is an **assertion library** with a nicer syntax (`expect`, `should`, `assert`).

Install:

```bash
npm install --save-dev mocha chai
```

Add to `package.json`:

```json
"scripts": {
  "test": "mocha"
}
```

**test/math.test.js**

```js
const { expect } = require("chai");
const { add } = require("../math");

describe("add()", function () {
  it("should return 5 when adding 2 and 3", function () {
    expect(add(2, 3)).to.equal(5);
  });

  it("should not return 5 when adding 2 and 2", function () {
    expect(add(2, 2)).to.not.equal(5);
  });
});
```

Run:

```bash
npm test
```

---

## 3. Jest

Jest is a test runner + assertion library in one.

Install:

```bash
npm install --save-dev jest
```

Add to `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Rename your test file to `math.test.js` (Jest finds `*.test.js` by default).

**math.test.js**

```js
const { add } = require("./math");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("2 + 2 should not be 5", () => {
  expect(add(2, 2)).not.toBe(5);
});
```

Run:

```bash
npm test
```

---

## Key differences

| Feature              | `assert`     | Mocha + Chai                 | Jest                         |
| -------------------- | ------------ | ---------------------------- | ---------------------------- |
| Built-in?            | ✅           | ❌ (install both)            | ❌ (install)                 |
| Test runner included | ❌           | ✅ (Mocha)                   | ✅                           |
| Assertion styles     | Basic strict | `expect`, `should`, `assert` | `expect`                     |
| Extra features       | None         | BDD/TDD styles               | Mocking, coverage, snapshots |

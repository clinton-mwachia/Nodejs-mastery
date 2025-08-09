# 🐞 **Debugging in Node.js**

## **1️⃣ `node inspect`**

The built-in **Node.js CLI debugger**.

### **Usage**

```bash
node inspect app.js
```

Example `app.js`:

```js
let total = 0;
for (let i = 0; i < 5; i++) {
  total += i;
  debugger; // Breakpoint
}
console.log("Total:", total);
```

### **Debug session**

Run:

```bash
node inspect app.js
```

You’ll see:

```
< Debugger listening >
debug> n   // step to next line
debug> c   // continue execution
debug> repl // enter interactive mode
```

📌 **Tips:**

- `n` → Next line
- `c` → Continue
- `repl` → Run JS code in the current scope
- `watch('variableName')` → Watch variables

---

## **2️⃣ Chrome DevTools with `--inspect`**

Lets you debug Node.js like front-end code, in Chrome DevTools.

### **Usage**

```bash
node --inspect app.js
```

Output:

```
Debugger listening on ws://127.0.0.1:9229/...
For help, see: https://nodejs.org/en/docs/inspector
```

Open **Chrome** and visit:

```
chrome://inspect
```

Click **"Open dedicated DevTools for Node"**, set breakpoints, inspect variables, and step through code visually.

### **With auto-break on start**

```bash
node --inspect-brk app.js
```

Breaks before first line runs.

---

## **3️⃣ `console.time()` & `console.timeEnd()`**

Measures execution time for a code block.

### Example

```js
console.time("loop");

let sum = 0;
for (let i = 0; i < 1_000_000; i++) {
  sum += i;
}

console.timeEnd("loop");
```

Output:

```
loop: 3.935ms
```

📌 **Tip:** Label in `time()` and `timeEnd()` must match.

---

## **4️⃣ `--trace-sync-io`**

Detects **synchronous I/O** operations (bad for performance in async apps).

### Example

```js
// sync-io.js
const fs = require("fs");

const data = fs.readFileSync("bigfile.txt", "utf8");
console.log(data);
```

Run:

```bash
node --trace-sync-io sync-io.js
```

Output:

```
(Use `node --trace-sync-io ...` to show where the sync calls happen)
WARNING: Detected use of sync API
    at Object.readFileSync (fs.js:XXX:YY)
    at Object.<anonymous> (sync-io.js:3:18)
```

📌 **When to use:**

- Profiling performance
- Finding blocking code in production

---

## **Cheat Sheet**

| Tool              | Purpose                               | Command Example               |
| ----------------- | ------------------------------------- | ----------------------------- |
| `node inspect`    | CLI debugger                          | `node inspect app.js`         |
| `--inspect`       | Chrome DevTools debugging             | `node --inspect app.js`       |
| `--inspect-brk`   | Chrome DevTools + pause on first line | `node --inspect-brk app.js`   |
| `console.time`    | Measure execution time                | `console.time('label')`       |
| `--trace-sync-io` | Detect synchronous I/O in async apps  | `node --trace-sync-io app.js` |

---

If you want, I can now **build a real-world Node.js project** that:

- Uses `--inspect` in Chrome DevTools
- Uses `console.time` for performance profiling
- Uses `--trace-sync-io` to detect slow code

That way you’ll see all of them **working together**.
Do you want me to build that example next?

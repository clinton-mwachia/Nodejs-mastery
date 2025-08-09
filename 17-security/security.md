# **🛡 Node.js Security Essentials**

## **1️⃣ Avoiding `eval` & Sanitizing Input**

### 📜 Why avoid `eval()`?

- `eval()` executes arbitrary JavaScript strings → **remote code execution risk**
- If user input is passed to `eval`, an attacker can run **any code** on your server

❌ **Vulnerable Example**

```js
// BAD: Executes user-provided code directly
const userInput = "console.log('Hacked!')";
eval(userInput);
```

✅ **Safe Alternative** — parse & validate instead of `eval`

```js
// Example: calculator without eval
const allowedOps = ["+", "-", "*", "/"];

function safeCalc(a, op, b) {
  if (!allowedOps.includes(op)) throw new Error("Invalid operator");
  return Function(`return ${a} ${op} ${b}`)();
}

console.log(safeCalc(5, "+", 3)); // 8
console.log(safeCalc(10, "*", 2)); // 20
```

---

### **Sanitizing Input**

- Always validate & sanitize input before using it
- You can use libraries like **validator** or **DOMPurify** (for HTML)

```bash
npm install validator
```

```js
const validator = require("validator");

const email = "user@example.com<script>alert('xss')</script>";

if (validator.isEmail(email)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}
```

**Rule:** Treat all external input as **untrusted**.

---

## **2️⃣ Keeping Secrets Secure**

### ❌ Don’t hardcode secrets

```js
// BAD
const API_KEY = "my-super-secret-key";
```

✅ Use **Environment Variables** via `.env`

```bash
npm install dotenv
```

```env
# .env
API_KEY=my-super-secret-key
```

```js
require("dotenv").config();
console.log(process.env.API_KEY);
```

**Benefits:**

- No secrets in version control
- Easy to change between environments

---

## **3️⃣ Rate Limiting Without Frameworks**

### Why?

- Protects your API from **abuse** & **DoS attacks**
- Limits how many requests a user/IP can make in a time window

✅ **Example: Simple in-memory rate limiter**

```js
const http = require("http");

const rateLimit = {};
const LIMIT = 5; // requests
const WINDOW = 60 * 1000; // 1 min

const server = http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;
  const now = Date.now();

  if (!rateLimit[ip]) {
    rateLimit[ip] = [];
  }

  // Remove timestamps older than the window
  rateLimit[ip] = rateLimit[ip].filter((ts) => now - ts < WINDOW);

  if (rateLimit[ip].length >= LIMIT) {
    res.writeHead(429, { "Content-Type": "text/plain" });
    return res.end("Too Many Requests - please wait\n");
  }

  rateLimit[ip].push(now);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request successful\n");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

**How it works:**

- Tracks request timestamps per IP
- Discards timestamps older than the rate limit window
- Blocks requests if the limit is exceeded

---

## 📌 **Summary Table**

| Topic              | Bad Practice                      | Good Practice                              |
| ------------------ | --------------------------------- | ------------------------------------------ |
| `eval`             | Running untrusted strings as code | Validate inputs, use safe alternatives     |
| Input Sanitization | Using raw user input              | Use libraries like `validator`             |
| Secrets            | Hardcoding in code                | Store in `.env` & access via `process.env` |
| Rate Limiting      | No limits → DoS possible          | Implement time-window request counters     |

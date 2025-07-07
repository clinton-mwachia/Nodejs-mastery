# Node.js Core Mastery

Master Node.js from the ground up — without relying on frameworks! This repository is a structured path to **learn, practice, and master** core Node.js internals, modules, and native APIs.

---

## 📌 What You'll Learn

This repo guides you through every essential core concept of Node.js with examples, mini-projects, and references:

1. [Node.js Fundamentals](#1-nodejs-fundamentals)
2. [Modules & Require System](#2-modules--require-system)
3. [File System (fs)](#3-file-system-fs)
4. [Event Loop & Event Emitters](#4-event-loop--event-emitters)
5. [Streams and Buffers](#5-streams-and-buffers)
6. [HTTP Module (Server Without Express)](#6-http-module-server-without-express)
7. [Networking with TCP/UDP](#7-networking-with-tcpudp)
8. [Child Processes and OS Module](#8-child-processes-and-os-module)
9. [Path and URL Modules](#9-path-and-url-modules)
10. [Process Module](#10-process-module)
11. [Timers & Scheduling](#11-timers--scheduling)
12. [Error Handling](#12-error-handling)
13. [Asynchronous Patterns](#13-asynchronous-patterns)
14. [CLI Tools](#14-cli-tools)
15. [NPM & package.json](#15-npm--packagejson)
16. [Debugging & Performance](#16-debugging--performance)
17. [Security Basics](#17-security-basics)
18. [Testing](#18-testing-optional)
19. [Publishing Your Own NPM Module](#19-publishing-your-own-npm-module)
20. [Projects to Practice](#20-projects-to-practice)

---

## 📁 Folder Structure

```

nodejs-core-mastery/
├── 01-fundamentals/
├── 02-modules/
├── 03-fs/
├── 04-events/
├── 05-streams/
├── 06-http/
├── 07-net/
├── 08-child-process/
├── 09-path-url/
├── 10-process/
├── 11-timers/
├── 12-error-handling/
├── 13-async-patterns/
├── 14-cli-tools/
├── 15-npm/
├── 16-debugging/
├── 17-security/
├── 18-testing/
├── 19-npm-module/
├── 20-projects/
└── README.md

```

---

## ✅ 1. Node.js Fundamentals

- What is Node.js?
- V8 engine
- Global variables: `__dirname`, `__filename`, `global`, `process`
- Running scripts: `node script.js`

📁 Code Examples: `01-fundamentals/`

---

## ✅ 2. Modules & Require System

- CommonJS (`require`, `module.exports`)
- ES Modules (`import`, `export`)
- Module caching
- Splitting code into modules

📁 Code Examples: `02-modules/`

---

## ✅ 3. File System (`fs`)

- Read/Write files (Sync and Async)
- Append, delete, and rename
- Work with directories
- Using `fs.promises`

📁 Code Examples: `03-fs/`

---

## ✅ 4. Event Loop & Event Emitters

- `EventEmitter` class
- Custom events
- `setImmediate` vs `nextTick`

📁 Code Examples: `04-events/`

---

## ✅ 5. Streams and Buffers

- Reading/Writing streams
- `pipe()`, transform streams
- Buffer allocation and manipulation

📁 Code Examples: `05-streams/`

---

## ✅ 6. HTTP Module (Server Without Express)

- Creating HTTP servers
- Handling routes manually
- Serving JSON & files

📁 Code Examples: `06-http/`

---

## ✅ 7. Networking with TCP/UDP

- TCP server with `net`
- UDP with `dgram`
- Chat server examples

📁 Code Examples: `07-net/`

---

## ✅ 8. Child Processes and OS Module

- Spawn, exec, fork
- Running shell commands
- Get OS info

📁 Code Examples: `08-child-process/`

---

## ✅ 9. Path and URL Modules

- Normalize, join, resolve paths
- Parsing and formatting URLs

📁 Code Examples: `09-path-url/`

---

## ✅ 10. Process Module

- `process.argv`
- `process.env`
- `process.exit()`, signals

📁 Code Examples: `10-process/`

---

## ✅ 11. Timers & Scheduling

- `setTimeout`, `setInterval`
- `setImmediate`, `process.nextTick`

📁 Code Examples: `11-timers/`

---

## ✅ 12. Error Handling

- Try/Catch
- Handling errors in callbacks, promises
- Uncaught exceptions

📁 Code Examples: `12-error-handling/`

---

## ✅ 13. Asynchronous Patterns

- Callbacks
- Promises
- `async/await`

📁 Code Examples: `13-async-patterns/`

---

## ✅ 14. CLI Tools

- Build your own CLI tool
- `readline`, `yargs`, `commander`
- Make your tool globally available

📁 Code Examples: `14-cli-tools/`

---

## ✅ 15. NPM & package.json

- `npm init`
- Dependencies vs DevDependencies
- Semantic versioning

📁 Code Examples: `15-npm/`

---

## ✅ 16. Debugging & Performance

- `node inspect`
- Chrome DevTools (`--inspect`)
- `console.time`, `--trace-sync-io`

📁 Code Examples: `16-debugging/`

---

## ✅ 17. Security Basics

- Avoiding eval, sanitizing input
- Keeping secrets secure
- Rate limiting (without frameworks)

📁 Code Examples: `17-security/`

---

## ✅ 18. Testing (Optional)

- Core `assert` module
- Using `mocha`, `chai`, or `jest`

📁 Code Examples: `18-testing/`

---

## ✅ 19. Publishing Your Own NPM Module

- `npm login`, `npm publish`
- Versioning
- Creating reusable libraries

📁 Code Examples: `19-npm-module/`

---

## ✅ 20. Projects to Practice

- Build a basic HTTP server
- File watcher & logger
- CLI to-do manager
- TCP chat server
- Custom stream-based CSV parser

📁 Code Examples: `20-projects/`

---

## 📚 Resources

- [Official Node.js Docs](https://nodejs.org/en/docs)

---

## ✍️ License

MIT License. Use it freely for learning and teaching.

---

## 🙌 Contribution

Pull requests welcome! Feel free to submit bug fixes or improvements. Create an issue if you want to suggest a topic or ask for help.

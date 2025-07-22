const readline = require("node:readline");
const fs = require("node:fs");
const path = require("node:path");
const filterLogs = require("./filter.cjs");
const archiveLogs = require("./archive.cjs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
🪵 Log Viewer & Archiver

1. Filter logs by keyword
2. Archive logs
3. Exit
`);

rl.question("Choose an option: ", (option) => {
  switch (option.trim()) {
    case "1":
      rl.question("Keyword to filter (e.g., ERROR): ", (keyword) => {
        filterLogs(keyword.trim());
        rl.close();
      });
      break;

    case "2":
      archiveLogs();
      rl.close();
      break;

    case "3":
      rl.close();
      break;

    default:
      console.log("Invalid choice.");
      rl.close();
  }
});

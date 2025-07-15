// useful for CLI tools or config files.
const fs = require("node:fs");

const dbFile = "db.json";

function readDB() {
  if (!fs.existsSync(dbFile)) return [];

  const raw = fs.readFileSync(dbFile);
  return JSON.parse(raw);
}

function writeDB(data) {
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2));
}

// Simulate saving a user
const users = readDB();
users.push({
  name: "Clinton",
  email: "clinton@example.com",
  timestamp: new Date(),
});
writeDB(users);

console.log("User added:", users);

const fs = require("node:fs");
const file = "notes.json";

function loadNotes() {
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, "utf8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  fs.writeFileSync(file, JSON.stringify(notes, null, 2));
}

function generateId() {
  return Math.random().toString(36).substring(2, 8);
}

module.exports = { loadNotes, saveNotes, generateId };

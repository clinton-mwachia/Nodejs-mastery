const { loadNotes, saveNotes, generateId } = require("./utils");
const logger = require("./logger");

function addNote(title, content) {
  const notes = loadNotes();
  const newNote = {
    id: generateId(),
    title,
    content,
    createdAt: new Date().toISOString(),
  };
  notes.push(newNote);
  saveNotes(notes);
  console.log(`✅ Note "${title}" added.`);
  logger.log(`Note added: ${title}`);
}

function listNotes() {
  const notes = loadNotes();
  if (notes.length === 0) return console.log("📝 No notes found.");

  console.log("\n🗒️ Your Notes:");
  notes.forEach((note) => {
    console.log(`- [${note.id}] ${note.title}: ${note.content}`);
  });
  console.log();
}

function deleteNote(id) {
  let notes = loadNotes();
  const originalLength = notes.length;
  notes = notes.filter((note) => note.id !== id);

  if (notes.length === originalLength) {
    console.log(`❌ Note with ID "${id}" not found.`);
  } else {
    saveNotes(notes);
    console.log(`🗑️ Note with ID "${id}" deleted.`);
    logger.log(`Note deleted: ID=${id}`);
  }
}

module.exports = { addNote, listNotes, deleteNote };

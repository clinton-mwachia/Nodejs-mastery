const readline = require("node:readline");
const { addNote, listNotes, deleteNote } = require("./notes");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log(`
=== Notes Manager ===

1. Add Note
2. List Notes
3. Delete Note
4. Exit
`);
  rl.question("Choose an option: ", handleChoice);
}

function handleChoice(choice) {
  switch (choice.trim()) {
    case "1":
      rl.question("Title: ", (title) => {
        rl.question("Content: ", (content) => {
          addNote(title, content);
          setTimeout(menu, 500);
        });
      });
      break;

    case "2":
      listNotes();
      setTimeout(menu, 1000);
      break;

    case "3":
      rl.question("Enter Note ID to delete: ", (id) => {
        deleteNote(id);
        setTimeout(menu, 500);
      });
      break;

    case "4":
      console.log("👋 Exiting Notes Manager...");
      rl.close();
      break;

    default:
      console.log("❌ Invalid choice. Try again.");
      setTimeout(menu, 500);
  }
}

menu();

// Global variables in Node.js
console.log("__dirname:", __dirname); // Current folder path
console.log("__filename:", __filename); // Current file path

// Access global object
global.myGlobalVar = "Accessible Anywhere";
console.log(global.myGlobalVar);

const net = require("node:net");
const fs = require("node:fs");
const clients = [];

function logMessage(message) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync("chat.log", `[${timestamp}] ${message}\n`);
}

const server = net.createServer((socket) => {
  socket.write("Welcome to the chat! Please enter your nickname: ");

  let nickname = "";
  let registered = false;

  clients.push(socket);

  socket.on("data", (data) => {
    const message = data.toString().trim();

    if (!registered) {
      nickname = message;
      registered = true;
      socket.write(`👋 Hello ${nickname}, you can now chat.\n`);
      logMessage(`🔵 ${nickname} joined the chat`);
      clients.forEach((client) => {
        if (client !== socket) {
          client.write(`📢 ${nickname} joined the chat\n`);
        }
      });
      return;
    }

    const timestamp = new Date().toLocaleTimeString();
    const fullMsg = `[${timestamp}] ${nickname}: ${message}`;

    clients.forEach((client) => {
      if (client !== socket) {
        client.write(fullMsg + "\n");
      }
    });

    logMessage(fullMsg);
  });

  socket.on("end", () => {
    clients.splice(clients.indexOf(socket), 1);
    if (nickname) {
      logMessage(`🔴 ${nickname} left the chat`);
      clients.forEach((client) => {
        client.write(`👋 ${nickname} left the chat\n`);
      });
    }
  });
});

server.listen(6000, () => {
  console.log("💬 Chat server running at port 6000");
});

const net = require("node:net");

const server = net.createServer((socket) => {
  console.log("✅ Client connected");

  socket.write("Welcome to the TCP server!\n");

  socket.on("data", (data) => {
    console.log(`📩 Received: ${data}`);
    socket.write(`You said: ${data}`);
  });

  socket.on("end", () => {
    console.log("❌ Client disconnected");
  });
});

server.listen(5000, () => {
  console.log("🚀 TCP Server running on port 5000");
});

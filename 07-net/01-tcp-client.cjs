const net = require("node:net");
const readline = require("node:readline");

const client = net.createConnection({ port: 5000 }, () => {
  console.log("✅ Connected to TCP server");
});

client.on("data", (data) => {
  console.log(`📨 Server: ${data}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  client.write(line);
});

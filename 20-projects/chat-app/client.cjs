const net = require("net");
const readline = require("readline");

const client = net.createConnection({ port: 6000 }, () => {
  console.log("🟢 Connected to chat server");
});

client.on("data", (data) => {
  console.log(data.toString());
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  client.write(line);
});

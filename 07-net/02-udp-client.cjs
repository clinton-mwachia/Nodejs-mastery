const dgram = require("dgram");
const client = dgram.createSocket("udp4");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  client.send(line, 4000, "localhost");
});

client.on("message", (msg) => {
  console.log(`📩 Reply: ${msg}`);
});

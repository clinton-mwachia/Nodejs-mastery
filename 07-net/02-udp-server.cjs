const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  console.log(`📨 Received ${msg} from ${rinfo.address}:${rinfo.port}`);
  server.send(`Echo: ${msg}`, rinfo.port, rinfo.address);
});

server.bind(4000, () => {
  console.log("🚀 UDP Server running on port 4000");
});

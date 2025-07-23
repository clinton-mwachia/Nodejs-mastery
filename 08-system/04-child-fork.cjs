const { fork } = require("node:child_process");

const child = fork("./child.cjs");

child.on("message", (msg) => {
  console.log("📨 Message from child:", msg);
});

child.send({ action: "greet", name: "Clinton" });

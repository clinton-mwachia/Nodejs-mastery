const os = require("node:os");

console.log("🖥️ OS Platform:", os.platform());
console.log("🏁 OS Type:", os.type());
console.log("🧠 CPU Arch:", os.arch());
console.log("🧠 CPU Info:", os.cpus().length, "cores");
console.log("🧠 Total Memory:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");
console.log("💾 Free Memory:", (os.freemem() / 1024 / 1024).toFixed(2), "MB");
console.log("🏠 Home Dir:", os.homedir());
console.log("📆 Uptime:", (os.uptime() / 60).toFixed(2), "mins");

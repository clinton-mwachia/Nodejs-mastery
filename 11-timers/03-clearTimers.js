const timeout = setTimeout(() => {
  console.log("❌ This will NOT run");
}, 3000);

clearTimeout(timeout);
console.log("🛑 Timeout cleared immediately");

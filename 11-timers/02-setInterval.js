let count = 0;

const timer = setInterval(() => {
  count++;
  console.log(`⏱️ Tick ${count}`);

  if (count >= 5) {
    clearInterval(timer);
    console.log("🛑 Stopped after 5 ticks");
  }
}, 1000);

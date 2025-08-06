async function fetchData() {
  try {
    const result = await fakeApiCall();
    console.log("✅ Got result:", result);
  } catch (err) {
    console.error("❌ Async Error:", err.message);
  }
}

function fakeApiCall() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("API failed")), 1000);
  });
}

fetchData();

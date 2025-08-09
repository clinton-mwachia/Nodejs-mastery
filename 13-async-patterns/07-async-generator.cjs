async function* getData() {
  yield "📦 Item 1";
  await new Promise((r) => setTimeout(r, 1000));
  yield "📦 Item 2";
}

(async () => {
  for await (const item of getData()) {
    console.log("➡️ Received:", item);
  }
})();

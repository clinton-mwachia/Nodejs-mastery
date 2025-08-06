try {
  let x = 10;
  let y = 0;

  if (y === 0) {
    throw new Error("Cannot divide by zero!");
  }

  console.log(x / y);
} catch (err) {
  console.error("❌ Error:", err.message);
}

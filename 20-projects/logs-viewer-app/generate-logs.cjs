require("fs").writeFileSync(
  "./logs/server.log",
  Array(10000)
    .fill("[INFO] Server started\\n[ERROR] Something failed\\n")
    .join("")
);

import { createReadStream, createWriteStream } from "fs";
import { Transform } from "stream";

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upper = chunk.toString().toUpperCase();
    this.push(upper);
    callback();
  },
});

const input = createReadStream("large.txt");
const output = createWriteStream("upper.txt");

input.pipe(upperCaseTransform).pipe(output);

output.on("finish", () => {
  console.log("✅ File transformed to uppercase.");
});

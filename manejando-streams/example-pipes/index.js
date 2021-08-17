const fs = require("fs");
const path = require("path");

const streamLectura = fs.createReadStream(
  path.join(__dirname, "./files/file1.txt")
);
const streamEscritura = fs.createWriteStream(
  path.join(__dirname, "./files/file2.txt")
);

streamLectura.pipe(streamEscritura);
streamLectura.on("end", () => {
  console.log("proceso finalizado");
});

const fs = require("fs");
const path = require("path");
const { Duplex } = require("stream");

const streamLectura = fs.createReadStream(
  path.join(__dirname, "./files/file1.txt")
);
const streamEscritura = fs.createWriteStream(
  path.join(__dirname, "./files/file2.txt")
);

const reporte = new Duplex({
  write(data, encode, callback) {
    console.log(data);
    callback();
  },
  read(size) {},
});

streamLectura.pipe(reporte).pipe(streamEscritura);
streamLectura.on("end", () => {
  console.log("proceso finalizado");
});

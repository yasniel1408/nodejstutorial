const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

const streamLectura = fs.createReadStream(
  path.join(__dirname, "./files/file1.txt")
);
const streamEscritura = fs.createWriteStream(
  path.join(__dirname, "./files/file2.txt")
);

streamLectura.setEncoding("utf8");

const filter = new Transform({
  writableObjectMode: true,
  transform(data, encode, callback) {
    this.push(data.toString().toUpperCase());
    console.log(data);
    callback();
  },
  final(callback) {
    callback();
  },
});

streamLectura.pipe(filter).pipe(streamEscritura);
streamLectura.on("end", () => {
  console.log("proceso finalizado");
});

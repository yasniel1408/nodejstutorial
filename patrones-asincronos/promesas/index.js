const path = require("path");
const promesaNode = require("fs").promises;

promesaNode
  .copyFile(
    path.join(__dirname, "./file1.txt"),
    path.join(__dirname, "./file1Copia.txt")
  )
  .then(() => console.log("copia terminada"))
  .catch(() => console.log("no se pudo copiar el archivo"))
  .finally(() => console.log("----"));

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("HOLA MUNDO");
});

app.listen(port, () => {
  console.log(`Server in port: ${port}`);
});

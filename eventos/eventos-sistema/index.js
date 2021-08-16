const http = require("https");

const req = http.get(
  "https://en.wikipedia.org/w/api.php?action=help&format=json",
  (res) => {
    res.on("data", (data) => {
      console.log("... recibiendo datos");
    });

    res.on("end", (chunk) => {
      console.log("Termina http");
    });
  }
);

req.on("socket", (data) => {
  console.log("Inicia http");
});

req.on("error", (data) => {
  console.log("Errors http");
});

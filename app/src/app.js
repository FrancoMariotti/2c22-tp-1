var express = require("express");
var app = express();
const { fibonacci } = require("./intensive");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

app.get("/", function (req, res) {
  console.log("PING");
  res.status(200).send("PING");
});

//Intensive
app.get("/fibonacci", function (req, res) {
  console.log("FIBONACCI");
  var fib;
  if (req.query.n === undefined) {
    fib = fibonacci(45);
  } else {
    fib = fibonacci(parseInt(req.query.n));
  }
  res.send(fib);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

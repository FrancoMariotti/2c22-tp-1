var express = require("express");
const axios = require("axios");
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

app.get("/sync", (req, res) => {
  console.log('Bbox 9090 sync');
  axios.get(`http://bbox:9090/`)
      .then(result => {
          res.send(`Bbox port 9090: Status ${result.status} Data ${result.data}`);
      })
      .catch(err => {
          res.send(`Error: ${err.message}`);
      });
});

app.get("/async", (req, res) => {
  console.log('Bbox 9090 async');
  axios.get(`http://bbox:9091/`)
      .then(result => {
          res.send(`Bbox port 9091: Status ${result.status} Data ${result.data}`);
      })
      .catch(err => {
          res.send(`Error: ${err.message}`);
      });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

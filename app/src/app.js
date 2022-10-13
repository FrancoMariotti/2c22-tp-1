import express from 'express';
import axios from 'axios';
import fibonacci from './intensive.js';

var app = express();

const port = process.env.PORT || 5000;

app.get("/ping", function (req, res) {
  console.log("PING");
  res.status(200).send("PING");
});

app.get("/fibonacci", function (req, res) {
  console.log("FIBONACCI");
  var fib;
  if (req.query.n === undefined) {
    fib = fibonacci(45);
  } else {
    fib = fibonacci(parseInt(req.query.n));
  }
  res.send({fib});
});

app.get("/bbox-1", (req, res) => {
  axios.get(`http://bbox:9090/`)
      .then(result => {
          res.send(`Bbox port 9090: Status ${result.status} Data ${result.data}`);
      })
      .catch(err => {
          res.send(`Error: ${err.message}`);
      });
});

app.get("/bbox-2", (req, res) => {
  axios.get(`http://bbox:9091/`)
      .then(result => {
          res.send(`Bbox port 9091: Status ${result.status} Data ${result.data}`);
      })
      .catch(err => {
          res.send(`Error: ${err.message}`);
      });
});

app.post("/login", (req, res) => {
  console.log("Intento de login");
  setTimeout(() => { res.status(200).send("Login exitoso"); }, 250);
});

app.get("/seleccionarCarrera", (req, res) => {
  console.log("seleccionar carrera");
  setTimeout(() => { res.status(200).send("Carrera seleccionada"); }, 100);
});

app.get("/misInscripciones", (req, res) => {
  console.log("Ver mis inscripciones");
  setTimeout(() => { res.status(200).send("Inscripciones obtenidas"); }, 250);
});

app.get("/ofertaAcademica", (req, res) => {
  console.log("Ver oferta academica");
  setTimeout(() => { res.status(200).send("Oferta academica obtenida"); }, 800);
});

app.post("/inscribirse", (req, res) => {
  console.log("Intento de inscripcion");
  setTimeout(() => { res.status(200).send("Inscripcion exitosa"); }, 350);
});

app.get("/logout", (req, res) => {
  console.log("Intento de logout");
  setTimeout(() => { res.status(200).send("Logout exitoso"); }, 150);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

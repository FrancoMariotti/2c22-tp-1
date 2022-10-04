var express = require('express');
var app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

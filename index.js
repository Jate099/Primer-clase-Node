var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola mundo!');
});

app.get('/tienda', function(req, res) {
    res.send('Funciona la tienda!');
  });

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
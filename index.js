var express = require('express');
var app = express();

app.use(express.static('public'));

var contador = 0;

console.log(__dirname);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/home.html');
  contador++;
});

app.get('/contacto', function(request, response) {
    response.send('Funciona contacto!');
  });

  app.get('/sobre-mi', function(request, response) {
    response.send('Funciona sobre-mi!');
  });

  app.get('/portafolio', function(request, response) {
    response.send('Funciona portafolio!');
  });

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
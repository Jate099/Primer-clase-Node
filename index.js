var express = require('express');
var app = express();

app.use(express.static('public'));

var contador = 0;

console.log(__dirname);

app.get('/', function (req, response) {
  response.sendFile(__dirname + '/public/home.html');
  contador++;
});

app.get('/contacto', function (request, response) {
  response.sendFile(__dirname + '/public/contacto.html');
});

app.get('/sobre-mi', function (request, response) {
  response.sendFile(__dirname + '/public/sobre-mi.html');
});

app.get('/portafolio', function (request, response) {
  response.sendFile(__dirname + '/public/portafolio.html');
});

app.listen(3000, function () {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
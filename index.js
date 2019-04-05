var express = require('express');
var app = express();

const fs = require('fs');

app.use(express.static('public'));

var contador = 0;

console.log(__dirname);

app.get('/', function (req, response) {
  response.sendFile(__dirname + '/public/home.html');

  contador++;

  function archivoEscrito(){
    console.log("el archivo se creo");
}

fs.writeFile('message.txt', contador, 'utf8', archivoEscrito);

//leer archivo
fs.readFile('message.txt', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
});

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
var express = require('express');
var renderEngine = require('express-handlebars');
var app = express();

const fs = require('fs');

app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.engine('handlebars', renderEngine());

var contador = {
  home: 0,
  contacto: 0,
};

console.log(__dirname);

app.get('/', function (req, response) {
  response.render('home');
});

app.get('/tienda', function (req, response) {
  response.sendFile(__dirname + '/public/home.html');

  contador.home++;

  function archivoEscrito(){
    console.log("el archivo se creo");
  }
});

//let vistas = 'visitas home: ' + contador.home + ' vistas contacto: ' + contador.contacto;

//fs.writeFile('message.txt', 'visitas: ' + contador.home, 'utf8', archivoEscrito);

//leer archivo
fs.readFile('message.txt', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
});

app.get('/tienda/producto', function (request, response) {
  var context = {
    titulo: 'tu qlooo',
    precio: '0',
    imagen: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg',
    descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia sapiente iste, atque, cumque vero expedita consectetur, voluptatum soluta molestias ipsam natus veritatis est blanditiis corporis eveniet vel perspiciatis aspernatur quas?',
  };
  response.render('producto', context);
});

app.get('/tienda/producto1', function (request, response) {
  var context = {
    titulo: 'tu qlooo2',
    precio: '10',
    imagen: 'https://www.infobae.com/new-resizer/kAjCyEfwdw0H57sLGDM5OOrTFUI=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/04/06155038/perro-beso-1024x576.jpg',
    descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia sapiente iste, atque, cumque vero expedita consectetur, voluptatum soluta molestias ipsam natus veritatis est blanditiis corporis eveniet vel perspiciatis aspernatur quas?',
  };
  response.render('producto', context);
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
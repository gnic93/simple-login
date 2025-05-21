// Invocamos a express
const express = require('express');
const app = express();
const port = 3000;

// Ruta de prueba
// app.get('/', (req, res) => {
//   res.render('index')
// });

// Seteamos urlencoded y json para capturar los datos que nos envían (body)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Invocamos a dotenv para cargar las variables de entorno
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

// Invocamos a public para servir archivos estáticos
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

// Establecemos motor de plantillas ejs
app.set('view engine', 'ejs');

// Varables de sesión
const session = require('express-session');
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
}));

// Importamos el archivo de rutas
const routerApi = require('./routes');
routerApi(app);

// Server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

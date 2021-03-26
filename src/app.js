// Librerias
const path = require('path');

// Express
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Routers
const indexRouter = require('./routers/index');
const detailRouter= require('./routers/detail')


// Configuramos el motor de vistas y la carpeta de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usamos methodOverride para poder implementar los métodos PUT y DELETE
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride('_method'))

// Seteamos la carpeta public con contenido estático
app.use(express.static(path.join(__dirname, '../public')));

// Seteamos los routers
app.use('/',indexRouter)
app.use('/edit',detailRouter)

// Levantamos el server en el puerto indicado en la variable de entorno PORT, o en el puerto 3000 si no hay nada ahí.
// Más info en: https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
app.listen(process.env.PORT || 3000,function() {
    console.log("Server running...")
    console.log("http://localhost:3000/")
})
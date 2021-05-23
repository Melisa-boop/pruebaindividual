// Librerias
const path = require( `path` );
const { APP_PORT } = require( `./config/constants` );

// Express
const express = require( `express` );

const app = express();
const methodOverride = require( `method-override` );

// multer
const multer = require( `multer` );

const storage = multer.diskStorage( {
	destination( req, file, cb )
	{
		cb( null, path.join( __dirname, `../public/images` ) );
	},
	filename( req, file, cb )
	{
		cb( null, `${file.fieldname}-${Date.now()}${path.extname( file.originalname )}` );
	},
} );

multer( { storage } );

// Routers
const apiRouter = require( `./routers` );

// Configuramos el motor de vistas y la carpeta de vistas
app.set( `view engine`, `ejs` );
app.set( `views`, path.join( __dirname, `views` ) );

app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

// Usamos methodOverride para poder implementar los métodos PUT y DELETEß
app.use( methodOverride( `_method` ) );

// Seteamos la carpeta public con contenido estático
app.use( express.static( path.join( __dirname, `../public` ) ) );

// Seteamos los routers
app.use( `/api`, apiRouter );

// Levantamos el server en el puerto indicado en la variable de entorno PORT,
// o en el puerto 3000 si no hay nada ahí.
// Más info en: https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
app.listen( APP_PORT, () =>
{
	/* eslint-disable no-console */
	console.log( `# Server is running on -> http://localhost:${APP_PORT}/` );
} );

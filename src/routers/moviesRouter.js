const multer = require( `multer` );
const path = require( `path` );

const express = require( `express` );
const router = express.Router();

const storage = multer.diskStorage( {
	destination( req, file, cb )
	{
		cb( null, path.join( __dirname, `../../images/movies` ) );
	},
	filename( req, file, cb )
	{
		cb( null, `${req.body.email}-${Date.now()}${path.extname( file.originalname )}` );
	},
} );

multer( { storage } );

const { moviesController } = require( `../controllers` );

// MOVIES, actorController.search );// busqueda por ID
router.get( `list`, moviesController.list );// listado de peliculas
// router.get( `:id`, moviesController.detail );// detalle de las peliculas
router.post( `create`, moviesController.create );// creacxion de uan peliculas
router.put( `edit`, moviesController.edit );// edicion de una pelicula
router.delete( `delete`, moviesController.delete );// eliminacion de una pelicula
module.exports = router;

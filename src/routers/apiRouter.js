const express = require( `express` );

const router = express.Router();
const apiController = require( `../controllers/apiController` );

// Index
router.get( `/`, ( _req, res ) =>
{
	res.set( `Content-Type`, `text/html` );
	return res.status( 200 ).send( `<h1 style="text-align:center;">Index API<h1>` );
} );

// ACTORES
router.get( `/actores`, apiController.listadoActores );// lista
router.post( `/crear`, apiController.creacion );// crear
router.post( `/actores/:id`, apiController.delete );// eliminar
router.post( `/actores/:id`, apiController.update );// editar

router.get( `/actores/:id`, apiController.detalle );// por ID y su detalle
router.get( `/actores/search`, apiController.search );// busqueda por ID

module.exports = router;

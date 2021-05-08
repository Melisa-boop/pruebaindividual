const express = require( `express` );

const router = express.Router();
const apiController = require( `../controllers/apiController` );

// ACTORES
router.get( `/`, apiController.listadoActores );// lista
router.get( `/:id`, apiController.detalle );// por ID y su detalle
router.get( `/search`, apiController.search );// busqueda por ID

router.post( `/`, apiController.creacion );// crear
router.put( `/:id`, apiController.update );// editar
router.delete( `/:id`, apiController.delete );// eliminar

module.exports = router;

const express = require( `express` );
const router = express.Router();

const { actorController } = require( `../controllers` );

// ACTORES
router.get( `/list`, actorController.list );// lista de actores
router.get( `/:id`, actorController.detail );// por ID y su detalle
router.get( `/search`, actorController.search );// busqueda por ID

router.get( `/create`,actorController.createForm)// formulario de creacion
router.post( `/create`, actorController.create );// crear un nuevo actor
router.get()
router.put( `/edit/:id`, actorController.update );// editar un actor
router.delete( `/:id`, actorController.delete );// eliminar

module.exports = router;

const express = require( `express` );
const router = express.Router();

const { actorController } = require( `../controllers` );
// ACTORES
router.get( `/characters`, actorController.list );// lista
router.get( `/:id`, actorController.detail );// por ID y su detalle
router.get( `/search`, actorController.search );// busqueda por ID

router.post( `/`, actorController.create );// crear
router.put( `/:id`, actorController.update );// editar
router.delete( `/:id`, actorController.delete );// eliminar

module.exports = router;

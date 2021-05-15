const express = require( `express` );
const router = express.Router();

const {moviesController} = require( `../controllers` );

// MOVIES
router.get( `/list`, moviesController.list );// lista de movies
router.get( `/:id`, moviesController.detail );// detalle de peliculas y  personajes asociados
router.get( `/search`, actorController.search );// busqueda por ID

router.get( `/create`,actorController.createForm)// formulario de creacion
router.post( `/create`, actorController.create );// crear un nuevo actor
router.get(`/edit/:id`, actorController.updateForm )//formulario de editar un actor
router.put( `/edit/:id`, actorController.update );// editar un actor
router.delete( `/edit/:id`, actorController.delete );// eliminar un actor

module.exports = router;

const express =require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

//ACTORES
router.get('/actores',apiController.listadoActores);//lista
router.post('/crear',apiController.creacion);//crear 
router.post('/actores/:id',apiController.delete);//eliminar 
router.post('/actores/:id', apiController.update);//editar

router.get('/actores/:id',apiController.detalle);//por ID y su detalle
router.get('/actores/search',apiController.search);//busqueda por ID


module.exports=router;
const express =require('express');
const router = express.Router();

const indexController=require('../controllers/indexController');

router.get('/',indexController.index);//muestra la vista
router.post('/',indexController.create);//crear las notas
router.delete('/:id',indexController.delete);//eliminar las notas


module.exports=router;
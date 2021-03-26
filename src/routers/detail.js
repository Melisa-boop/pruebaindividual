const { createRequireFromPath } = require("module");

const express = require('express')
const router=express.Router();

const detailController =require('../controllers/detailController');
const {route}=require('./index');

router.get('/:id',detailController.detail);//me muestra las por id y su detalle
router.post('/:id',detailController.editSave);//guardo las notas

module.exports=router;



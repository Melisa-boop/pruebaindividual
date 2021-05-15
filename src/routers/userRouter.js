const { Router } = require( `express` );

const express = require( `express` );
const router = express.Router();
// Validators
const registerValidator = require( `../Validaciones/registerValidator` );

const { userController } = require( `../controllers` );

// RUTA PARA EL registro auth/register
router.post( `/register`, registerValidator, userController.register );

// usuarios
// GET login auth/login
router.post( `/login`, loginValidator, userController.login );

module.exports = router;

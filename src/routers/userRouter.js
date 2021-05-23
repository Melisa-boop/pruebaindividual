const express = require( `express` );
const router = express.Router();
// Validators
const registerValidator = require( `../middlewares/validations/registerValidator` );

const { userController } = require( `../controllers` );

// RUTA PARA EL registro auth/register
router.post( `/register`, registerValidator, userController.register );

// usuarios
// GET login auth/login
router.post( `/login`, userController.login, userController.createToken );

module.exports = router;

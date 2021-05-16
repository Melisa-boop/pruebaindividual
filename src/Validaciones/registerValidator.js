// registerValidator valida los datos del Form de Registro

const { check } = require( `express-validator` );

const db = require( `../database/models/index` );

module.exports = [
	check( `name` )
		.notEmpty().withMessage( `El campo no puede estar vacío` )
		.isLength( { min: 2, max: 20 } )
		.withMessage( `El nombre tiene que tener como mínimo 2 caracteres` ),

	check( `last_name` )
		.notEmpty().withMessage( `El campo no puede estar vacío` )
		.isLength( { min: 2, max: 20 } )
		.withMessage( `El apellido tiene que tener como mínimo 2 caracteres` ),

	check( `email` )
		.notEmpty().withMessage( `El campo no puede estar vacío` )
		.isEmail()
		.withMessage( `Debes ingresar un email válido` )
		.custom( async ( email ) =>
		{
			const registeredEmail = await db.Usuario.findOne( { where: { email } } );
			if ( registeredEmail )
			{
				throw new Error( `Este email ya está registrado` );
			}
		} ),

	check( `password` )
		.notEmpty().withMessage( `El campo no puede estar vacío` )
		.isLength( { min: 8, max: 15 } )
		.withMessage( `La contraseña debe contener como mínimo 8 caracteres` ),

	check( `repassword` )
		.notEmpty().withMessage( `El campo no puede estar vacío` )
		.isLength( { min: 8, max: 15 } )
		.withMessage( `La contraseña debe contener como mínimo 8 caracteres` )
		.custom( ( repassword, { req } ) =>
		{
			const { password } = req.body;
			if ( password !== repassword )
			{
				throw new Error( `Las contraseñas deben ser iguales` );
			}
		} ),
];

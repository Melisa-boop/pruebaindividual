// Database
const db = require( `../database/models/index` );
const bcrypt = require( `bcrypt` );

// validaciones
const { validationResult } = require( `express-validator` );

const controller = {};

// Registro de usuario
controller.register = ( req, res ) =>

{
	// Validamos los datos del registro del post
	const errors = validationResult( req );
	if ( !errors.isEmpty() )
	{
		return res.status( 422 ).json( { error: error.mapped() } );
	}

	db.Usuario.create( {
		name       : req.body.name,
		email      : req.body.email,
		password   : bcrypt.hashSync( req.body.password, 12 ),
		repassword : bcrypt.hashSync( req.body.password, 12 ),

	} )
		.then( ( user ) => res.json( { user } ) )
		.catch( ( error ) => res.send( error ) );
};

controller.login = async ( req, res ) =>
{
	const user = await db.Usuario.findOne( { where: { email: req.body.email } } );
	if ( user )
	{
	}
	else
	{
		res.json( { error: `error en el usuario que se se quiere loguear` } );
	}
};
module.exports = controller;

// Database
const db = require( `../database/models/index` );
const bcrypt = require( `bcrypt` );
const moment = require( `moment` );
const jwt = require( `jwt-simple` );

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
		const iguales = bcrypt.compareSync( req.body.password, user.password );
		if ( iguales )
		{
			res.json( { success: this.createToken( user ) } );
		}
	}
	else
	{
		res.json( { error: `error en el usuario y/o contrasena` } );
	}
};

controller.createToken = ( user ) =>
{
	const payload = {
		usuarioId : user.id, // encripto el token
		createdAt : moment().unix(),
		expiredAt : moment().add( 5, `minutes` ).unix(),

	};
	return jwt.encode( payload, `frase secreta` );// me devuelve el token
};
module.exports = controller;

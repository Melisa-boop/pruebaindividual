/* eslint-disable consistent-return */
// Database
const db = require( `../database/models/index` );
const bcrypt = require( `bcrypt` );
const moment = require( `moment` );
const jwt = require( `jwt-simple` );

// validaciones
const { validationResult } = require( `express-validator` );

const controller = {};

// Registro de usuario
controller.register = async ( req, res ) =>
{
	// Validamos los datos del registro del post
	const errors = validationResult( req );
	if ( !errors.isEmpty() )
	{
		return res.status( 422 ).json( { error: errors.mapped() } );
	}

	try
	{
		const user = await db.User.create( {
			name       : req.body.name,
			last_name  : req.body.last_name,
			email      : req.body.email,
			password   : bcrypt.hashSync( req.body.password, 12 ),
			repassword : bcrypt.hashSync( req.body.password, 12 ),

		} );
		return res.json( { user } );
	}
	catch ( e )
	{
		return res.status( 400 ).json( { error: e.message } );
	}
};

const createToken = ( user ) =>
{
	const payload = {
		usuarioId : user.id, // encripto el token
		createdAt : moment().unix(),
		expiredAt : moment().add( 10, `minutes` ).unix(),
	};

	return jwt.encode( payload, `frase secreta` );// me devuelve el token
};
controller.login = async ( req, res ) =>

{
	// Validamos los datos del login por el post
	const errors = validationResult( req );
	if ( !errors.isEmpty() )
	{
		return res.status( 422 ).json( { error: errors.mapped() } );
	}

	try
	{
		const user = await db.User.findOne( { where: { email: req.body.email } } );
		if ( user )
		{
			const iguales = bcrypt.compareSync( req.body.password, user.password );
			if ( iguales )
			{
				return res.json( { success: createToken( user ) } );
			}
			return res.status( 400 ).json( { e: `error en el usuario y/o contrasena` } );
		}
	}
	catch ( e )

	{
		console.log( e );
		return res.status( 500 ).json( { e: `error en el usuario y/o contrasena` } );
	}
};

module.exports = controller;

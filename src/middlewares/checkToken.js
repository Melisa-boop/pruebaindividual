const jwt = require( `jwt-simple` );
const moment = require( `moment` );

/**
 * Check's if the request has the auth token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns next() if is valid | status 400 if not
 */
const checkToken = ( req, res, next ) =>
{
	if ( !req.headers[`user-token`] )
	{ // el token se encuentra en al cabcera?
		return res.json( { error: `precisas  el user-token` } );
	}

	const userToken = req.headers[`user-token`];
	let payload = {};
	try
	{
		payload = jwt.decode( userToken, `frase secreta` );// decodificar el token
	}
	catch ( error )
	{
		return res.status( 400 ).json( { error: `el token es incorrecto` } );
	}
	if ( payload.expiredAt < moment().unix() )
	{
		return res.status( 400 ).json( { error: `el token ha expirado` } );
	}
	req.usuarioId = payload.usuarioId;// para menejarlo en las rutas

	return next();
};

module.exports = {
	checkToken,
};

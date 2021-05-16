const jwt = require( `jwt-simple` );
const moment = require( `moment` );

const checkToken = ( req, res, next ) =>// todos los que se quieran conectar precisan pasr por al cabecera
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
		return res.json( { error: `el token es incorrecto` } );
	}
	if ( payload.expiredAt < moment().unix() )
	{
		return res.json( { error: `el token ha expirado` } );
	}
	req.usuarioId = payload.usuarioId;// para menejarlo en las rutas

	next();
};
module.exports = {
	checkToken,
};

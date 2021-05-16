// Database
const db = require( `../database/models/index` );

const controller = {};

// listado de peliculas
controller.list = ( req, res ) =>
{
	db.Movie.findAll(
		{
			include: { all: true },
		},
	)
		.then( ( films ) => res.json( { films } ) )
		.catch( ( error ) => res.send( error ) );
};

// creacion de pelicula
controller.create = ( req, res ) =>
{
	db.Movie.create( {
		title    : req.body.title,
		rating   : req.body.rating,
		awards   : req.body.awards,
		genre_id : req.body.genre_id,

	} )
		.then( ( films ) => res.json( { films } ) );
};

// editar una pelicula
controller.edit = ( req, res ) =>
{
	db.Movie.update( {
		title    : req.body.title,
		rating   : req.body.rating,
		awards   : req.body.awards,
		genre_id : req.body.genre_id,

	},
	{
		where: {
			id: req.params.id,
		},
	} )
		.then( () => res.json( { success: `se ha modificado la pelicula` } ) );
};

// eliminar una pelicula

controller.delete = ( req, res ) =>
{
	db.Movie.destroy( {
		where: { id: req.params.id },
	} )
		.then( () => res.json( { success: `la pelicila ha sido eliminada` } ) );
};
module.exports = controller;

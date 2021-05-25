// Database
const db = require( `../database/models/index` );
const fs = require( `fs` );
const path = require( `path` );

const controller = {};

// listado de peliculas
controller.list = ( req, res ) =>
{
	db.Movie.findAll(
		{
			include: { all: true },
		},
	)
		.then( ( movies ) => res.json( { movies } ) )
		.catch( ( error ) => res.send( error ) );
};

// creacion de pelicula
controller.create = ( req, res ) =>
{
	db.Movie.create( {
		title        : req.body.title,
		rating       : req.body.rating,
		awards       : req.body.awards,
		genre_id     : req.body.genre_id,
		image        : ( req.file ? req.file.filename : req.body.image ),
		release_date : req.body.release_date,
		length       : req.body.length,

	} )
		.then( ( movies ) => res.json( { movies } ) )
		.catch( ( error ) => res.send( error ) );
};

// editar una pelicula
controller.edit = ( req, res ) =>
{
	db.Movie.update( {
		title        : req.body.title,
		rating       : req.body.rating,
		awards       : req.body.awards,
		genre_id     : req.body.genre_id,
		image        : ( req.file ? req.file.filename : req.body.image ),
		release_date : req.body.release_date,
		length       : req.body.length,

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
		.then( () => res.json( { success: `la pelicula ha sido eliminada` } ) );
};

controller.detail = ( req, res ) =>
{
	db.Movie.findByPk( {
		where   : { id: req.params.id },
		include : { all: true },

	} )
		.then( ( movies ) => res.json( { movies } ) )
		.catch( ( error ) => res.send( error ) );
};
module.exports = controller;

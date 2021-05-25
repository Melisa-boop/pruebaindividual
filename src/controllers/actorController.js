// Database
const db = require( `../database/models/index` );

const controller = {};

// istado de actores GET
controller.list = ( req, res ) =>
{
	db.Actor.findAll(
		{
			include: { all: true },
		},
	)
		.then( ( actors ) => res.json( { actors } ) )
	    .catch( ( error ) => res.send( error ) );
};

// buscador de actores
controller.search = ( req, res ) =>
{
	console.log( req.query );
	db.Actor.findAll( {
		where: {
			first_name: {
				[db.Sequelize.Op.like]: `%${req.query.search}%`, // loq ue el usuario busca
			},
		},

	} )
		.then( ( resultado ) => res.json( {
			queryString : req.query.search,
			actores     : resultado, // recuperamos lo que el usuario busca
		} ) )
		.catch( ( e ) =>
		{
			console.log( e );
		} );
};

// modificacion de actores PUT
controller.update = ( req, res ) =>
{
	db.Actor.update( {
		id         : req.body.id,
		first_name : req.body.first_name,
		last_name  : req.body.last_name,
		image      : ( req.file ? req.file.filename : req.body.image ),
		edad       : req.body.edad,
		historia   : req.body.historia,
		// favorite_movie_id : req.body.favourite_movie_id,

	},
	{
		where: {
			id: req.params.id,
		},
	} )
		.then( () => res.json( { success: `se ha modificado el actor` } ) );
};

controller.delete = ( req, res ) =>
{
	console.log( req.params.id );
	db.Actor.destroy( {

	},
	{
		where: {
			id: req.params.id,

		},
	} )
		.then( () => res.json( { success: `se ha borrado la pelicula` } ) )
		.catch( ( error ) => res.send( error ) );
};

// creacion de actores  POST
controller.create = ( req, res ) =>
{
	console.log( req.body );
	db.Actor.create( {
		id         : req.body.id,
		first_name : req.body.first_name,
		last_name  : req.body.last_name,
		image      : ( req.file ? req.file.filename : req.body.image ),
		// favorite_movie_id : req.body.favourite_movie_id,
		edad       : req.body.edad,
		historia   : req.body.historia,

	} )

		.then( ( actor ) => res.json( { actor } ) );
};

// detalle de producto
controller.detail = ( req, res ) =>
{
	db.Actor.findByPk( req.params.id, {
		include: { all: true, nested: true },
	} )
		.then( ( actores ) => res.json( { actores } ) )
		.catch( ( error ) => res.send( error ) );
};

module.exports = controller;

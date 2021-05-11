// Database
const db = require( `../database/models/index` );

const controller = {};

controller.list = ( req, res ) =>
{
	db.Actor.findAll( {
		include: { all: true },
	} )
		.then( ( actors ) => res.json( { actors } ) )
		.catch( ( error ) => res.send( error ) );
};

controller.search = ( req, res ) =>
{ // faltaria hacer la vista de search resoult// req.query.search(lo que el usuario busca)
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

controller.update = ( req, res ) =>
{
	db.Actor.update( {
		first_name         : req.body.first_name,
		last_name          : req.body.last_name,
		image              : ( req.file ? req.file.filename : req.body.image ),
		rating             : req.body.rating,
		favourite_movie_id : req.body.favourite_movie_id,

	},
	{
		where: {
			id: req.params.id,
		},
	} )
		.then( () => res.json( { success: `se ha modificado al pelicula` } ) );
};

controller.delete = ( req, res ) =>
{
	db.Actor.destroy( {

	},
	{
		where: {
			id: req.params.id,
		},
	} )
		.then( () => res.json( { success: `se ha borrado al pelicula` } ) );
};

controller.create = ( req, res ) =>
{
	db.Actor.create( {
		first_name         : req.body.first_name,
		last_name          : req.body.last_name,
		image              : ( req.file ? req.file.filename : req.body.image ),
		rating             : req.body.rating,
		favourite_movie_id : req.body.favourite_movie_id,
	} )

		.then( ( actor ) => res.json( { actor } ) );
};

controller.detail = ( req, res ) =>
{
	db.Actor.findByPk( req.params.id, {
		include: { all: true, nested: true },
	} )
		.then( ( actores ) => res.json( { actores } ) )
		.catch( ( error ) => res.send( error ) );
};

module.exports = controller;

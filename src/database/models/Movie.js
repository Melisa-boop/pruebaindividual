module.exports = ( sequelize, dataTypes ) =>
{
	const alias = `Movie`;// nombre del modelo que le cedi a models( la BBDD se llama notes)

	const cols = {
		id: {
			type          : dataTypes.INTEGER,
			primaryKey    : true,
			autoIncrement : true,
		},
		title: {
			type: dataTypes.STRING,
		},

		rating: {
			type: dataTypes.DOUBLE,
		},

		awards: {
			type: dataTypes.INTEGER,
		},
		length: {
			type: dataTypes.INTEGER,

		},
		genre_id: {
			type: dataTypes.INTEGER,
		},
		image: {
			type    : dataTypes.STRING,
			notNull : true,
	    },
		release_date: {
			type: dataTypes.DATE,
		},
		created_at: {
			type: dataTypes.DATE,
		},

		updated_at: {
			type: dataTypes.DATE,
		},

		deleted_at: {
			type: dataTypes.DATE,
		},

	};
	const config = {
		tableName   : `movies`,
		timestamps  : true,
		underscored : true,
		createdAt   : `created_at`,
		updatedAt   : `updated_at`,
	};

	const Movie = sequelize.define( alias, cols, config );
	Movie.associate = ( models ) =>
	{
		Movie.belongsToMany( models.Actor, {
			as          : `actores`,
			through     : `actor_movie`,
			foreignKey  : `movie_id`,
			otherkey    : `actor_id`,
			timestamps  : true,
			underscored : true,
		} );
		Movie.belongsTo( models.Genero, {
			as          : `generos`,
			foreignKey  : `genre_id`,
			timestamps  : true,
			underscored : true,
		} );
	};

	return Movie;
};

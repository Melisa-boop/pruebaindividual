module.exports = function ( sequelize, dataTypes )
{
	const alias = `Actor`;// nombre del modelo que le cedi a models( la BBDD se llama notes)

	const cols = {
		id: {
			type          : dataTypes.INTEGER,
			primaryKey    : true,
			autoIncrement : true,
		},
		first_name: {
			type: dataTypes.STRING,
		},

		last_name: {
			type: dataTypes.STRING,
		},

		rating: {
			type: dataTypes.DECIMAL,
		},

		image: {
			type: dataTypes.STRING,
		},
		/* favourite_movie_id: {
			type: dataTypes.INTEGER,
		}, */
	};
	const config = {
		tableName   : `actors`,
		timestamps  : true,
		underscored : true,

	};
	const Actor = sequelize.define( alias, cols, config );
	 Actor.associate = function ( models )
	 {
	 Actor.belongsToMany( models.Movie, {
	 as          : `movies`,
	 through     : `actor_movie`,
	 foreignKey  : `actor_id`,
	 otherkey    : `movie_id`,
	 timestamps  : false,
			underscored : true,
	 } );
	};
	return Actor;
};

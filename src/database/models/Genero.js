module.exports = ( sequelize, dataTypes ) =>
{
	const alias = `Genero`;

	const cols = {
		id: {
			type          : dataTypes.INTEGER,
			primaryKey    : true,
			autoIncrement : true,
		},
		name: {
			type: dataTypes.STRING,
		},
		ranking: {
			type: dataTypes.INTEGER,
		},

		deleted_at: {
			type: dataTypes.DATE,
		},
		created_at: {
			type: dataTypes.DATE,
		},
		updated_at: {
			type: dataTypes.DATE,
		},

	};

	const config = {
		tableName   : `genres`,
		timestamps  : true,
		underscored : true,
	};

	const Genero = sequelize.define( alias, cols, config );
	Genero.associate = ( models ) =>
	{
		Genero.hasMany( models.Movie, {
			as          : `movies`,
			foreignKey  : `genre_id`,
			timestamps  : true,
			underscored : true,

		} );
	};

	return Genero;
};

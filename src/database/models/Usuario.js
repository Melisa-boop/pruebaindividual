module.exports = function ( sequelize, dataTypes )
{
	const alias = `Usuario`;
	const cols = {

		id: {
			type          : dataTypes.INTEGER.UNSIGNED,
			notNull       : true,
			primaryKey    : true,
			autoIncrement : true,
		},
		name: {
			type    : dataTypes.STRING,
			notNull : true,

		},

		email: {
			type    : dataTypes.STRING,
			notNull : true,
		},

		password: {
			type    : dataTypes.STRING,
			notNull : true,
		},

		created_at: {
			type: dataTypes.DATE,
		},
		updated_at: {
			type: dataTypes.DATE,
		},

	};

	const config = {
		tableName   : `users`,
		timestamps  : true,
		underscored : true,
		createdAt   : `created_at`,
		updatedAt   : `updated_at`,
	};

	const Usuario = sequelize.define( alias, cols, config );

	return Usuario;
};

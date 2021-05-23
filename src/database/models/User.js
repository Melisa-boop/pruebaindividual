module.exports = ( sequelize, dataTypes ) =>
{
	const alias = `User`;

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
		repassword: {
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

	const User = sequelize.define( alias, cols, config );

	return User;
};
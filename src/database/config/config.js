const {
	DB_NAME,
	DB_HOST,
	DB_PORT,
	DB_USERNAME,
	DB_PASSWORD,
} = require( `../../config/constants` );

module.exports = {
	development: {
		username : DB_USERNAME,
		password : DB_PASSWORD,
		database : DB_NAME, // nombre de la BBDD
		host     : DB_HOST,
		dialect  : `mysql`,
		port     : DB_PORT,
		define   : {
			timestamps  : true,
			underscored : true,
		},
	},
	test: {
		username : DB_USERNAME,
		password : DB_PASSWORD,
		database : DB_NAME,
		host     : DB_HOST,
		dialect  : `mysql`,
		port     : DB_PORT,
		define   : {
			timestamps  : true,
			underscored : true,
		},
	},
	production: {
		username : DB_USERNAME,
		password : DB_PASSWORD,
		database : DB_NAME,
		host     : DB_HOST,
		dialect  : `mysql`,
		port     : DB_PORT,
		define   : {
			timestamps  : true,
			underscored : true,
		},
	},
};

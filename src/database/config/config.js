const {
	DB_NAME,
	DB_HOST,
	DB_PORT,
	DB_USERNAME,
	DB_PASSWORD,
} = require( `../../config/constants` );

module.exports = {
	development: {
		username : `root`,
		password : null,
		database : `movies_db`, // nombre de la BBDD
		host     : DB_HOST,
		dialect  : `mysql`,
		port     : 3306,
		define   : {
			timestamps  : true,
			underscored : true,
		},
	},
	test: {
		username : DB_USERNAME,
		password : DB_PASSWORD,
		database : `movies_db`,
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
		database : `movies_db`,
		host     : DB_HOST,
		dialect  : `mysql`,
		port     : DB_PORT,
		define   : {
			timestamps  : true,
			underscored : true,
		},
	},
};

module.exports = {
	development: {
		username : `root`,
		password : null,
		database : `movies_db`, // nombre de la BBDD
		host     : `127.0.0.1`,
		dialect  : `mysql`,
		port     : `3306`,
		define   : {
			timestamps  : true,
			underscored : true,
		},
	},
	test: {
		username : `root`,
		password : null,
		database : `movies_db`,
		host     : `127.0.0.1`,
		dialect  : `mysql`,
		port     : `3306`,
		define   : {
			timestamps  : true,
			underscored : true,
		},
	},
	production: {
		username : `root`,
		password : null,
		database : `movies_db`,
		host     : `127.0.0.1`,
		dialect  : `mysql`,
		port     : `3306`,
		define   : {
			timestamps  : true,
			underscored : true,
		},
	},
};

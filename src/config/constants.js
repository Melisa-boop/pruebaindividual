require( `dotenv` ).config();

const config = {
	APP_PORT    : process.env.APP_PORT || 3000,
	NODE_ENV    : process.env.NODE_ENV || `development`,
	DB_NAME     : process.env.DB_NAME || `movies_db`,
	DB_HOST     : process.env.DB_HOST || `127.0.0.1`,
	DB_PORT     : process.env.DB_PORT || 3306,
	DB_USERNAME : process.env.DB_USERNAME || `root`,
	DB_PASSWORD : process.env.DB_PASSWORD || null,
};

module.exports = config;

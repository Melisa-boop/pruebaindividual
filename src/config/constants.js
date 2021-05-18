require( `dotenv` ).config();

const config = {
	APP_PORT    : process.env.APP_PORT || 3000,
	NODE_ENV    : process.env.NODE_ENV || `development`,
	DB_NAME     : process.env.DB_NAME || ``,
	DB_HOST     : process.env.DB_HOST || ``,
	DB_PORT     : process.env.DB_PORT || ``,
	DB_USERNAME : process.env.DB_USERNAME || ``,
	DB_PASSWORD : process.env.DB_PASSWORD || ``,
};

module.exports = config;

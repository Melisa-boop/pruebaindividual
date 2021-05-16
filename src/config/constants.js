require( `dotenv` ).config();

const config = {
	APP_PORT : process.env.APP_PORT || 300,
	NODE_ENV : process.env.NODE_ENV || `development`,
};

module.exports = config;

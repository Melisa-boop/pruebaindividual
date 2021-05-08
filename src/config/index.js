require( `dotenv` ).config();

const config = {
	APP_PORT: process.env.APP_PORT || 300,
};

module.exports = config;

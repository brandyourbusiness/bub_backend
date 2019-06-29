// Initiates with all requirements
import { initApollo } from '../config/apollo';
import { initDatabase } from '../config/database';
import { initServer } from '../config/express';
import { initGraphqlSchema } from '../lib/graphql/schema';
// import { initRoutes } from '../lib/routes';

module.exports = async (config, options) => {
	config = Object.assign({}, config, getEnv(config));

	try {
		let server = new initServer(config, options);

		await new initGraphqlSchema(config, options);
		await new initApollo(config, options);
		await new initDatabase(config, options);
		// await new initRoutes(config, options);

		server.start();
		return config;
	} catch (e) {
		console.log(`Error occured ${e}`);
	}
}

function getEnv(config) {
	var env = process.env.NODE_ENV || 'development';
	var envConfig = require('../environments/'+env+'.json');

	return Object.assign({}, envConfig);
}
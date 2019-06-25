import { ApolloServer } from 'apollo-server-express';

class initApollo {
	constructor(config, options) {
		this.config = config;
		this.options = options;
		this.setUp();
	}

	setUp() {
		let { app } = this.config;
		let apolloServer = new ApolloServer({
			typeDefs: this.options["typeDefs"],
			resolvers: this.options["resolvers"]
		});
		
		apolloServer.applyMiddleware({app});
		this.config["apollo"] = apolloServer;
		return this.config;
	}
}

// const initApollo = async (config, options) => {
// 	const apolloServer = new ApolloServer({
// 		typeDefs,
// 		resolvers
// 	});
// 	const { app } = config;
// 	apolloServer.applyMiddleware({app});
// 	config["apollo"] = apolloServer;
// 	return config;
// }

module.exports = { initApollo };
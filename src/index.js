// Includes external plugins like sentry, logging, monitoring
import setUpServer from "./app";
import globalInit from "../global_lib";
import entities from "../lib/entities";

(
	async (config={}, options={}) => {
		config = await setUpServer(config, options);
		

		options['entities'] = entities;

		await new globalInit(config, options);
	}
)();


// import { ApolloServer, gql } from "apollo-server-express";
// import { typeDefs, resolvers } from "./schema";
// import express from "express";
// import mongoose from "mongoose";

// const startServer = async() => {
// 	const app = express();

// 	const server = new ApolloServer({
// 		typeDefs, 
// 		resolvers
// 	});

// 	server.applyMiddleware({ app });

// 	// fs.readFile('./config/development.js', 'utf-8', (err, data) => {
// 		console.log('devConfig', envConfig, typeof(envConfig))
// 	// })
	

// 	// server.listen({port: 4000}).then(({url}) => {
// 	// 	console.log(`Server started at ${url}`)
// 	// })

// 	app.listen({port: 4000}, () => {
// 		console.log(`Server started at ${server.graphqlPath}`)
// 	})
// }

// startServer();
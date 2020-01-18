import {
	ApolloServer,
	AuthenticationError,
	ForbiddenError,
	UserInputError
} from "apollo-server-express";
import { auth } from "./firebase";
import { verifyUserWithEmail } from "../src/auth";

class initApollo {
	constructor(config, options) {
		this.config = config;
		this.options = options;
		this.config["user"] = {};
		this.setUp();
	}

	setUp() {
		let { app } = this.config;
		let apolloServer = new ApolloServer({
			typeDefs: this.options["typeDefs"],
			resolvers: this.options["resolvers"],
			context: async ({ req }) => {
				let authToken = "";
				let currentUser = {
					email: "",
					roles: []
				};
				try {
					authToken = req.headers.authorization
						? req.headers.authorization.replace("Bearer ", "")
						: "";
					if (authToken !== "") {
						await auth.verifyIdToken(authToken).then(async decodedToken => {
							await verifyUserWithEmail(this.config, {
								email: decodedToken.email
							}).then(res => {
								currentUser = res;
								this.config["user"] = res;
							});
						});
					}
				} catch (e) {
					console.log(`Error in context block : ${e}`);
					return e;
				}
				if (!currentUser) {
					throw new AuthenticationError(
						`Something went wrong. Please try again.`
					);
				}
				return {
					authToken,
					currentUser
				};
			},
			formatError: err => {
				if (err.message.startsWith("Database Error: ")) {
					return new Error("Internal Server Error");
				}
				return err;
			},
			engine: {
				rewriteError(err) {
					if (
						err instanceof AuthenticationError ||
						err instanceof UserInputError ||
						err instanceof ForbiddenError ||
						(err.message && err.message.startsWith("Known error message"))
					) {
						return null;
					}
					err.message = err.message.replace(/x-api-key:[A-Z0-9-]+/, "REDACTED");
					return err;
				}
			}
		});

		apolloServer.applyMiddleware({ app });
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

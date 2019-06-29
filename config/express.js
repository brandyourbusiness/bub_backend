import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
/*
	bodyParser: to server
	cors: to give access for Cross platforms
*/

class initServer {
	constructor(config, options) {
		this.config = config;
		this.options = options;
		this.setUp();
	}

	setUp(config, options) {
		const app = express();

		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.options("*", cors());

		this.config["app"] = app;
		this.app = app;
		return this.config;
	}

	start() {
		this.app.listen(this.config, () => {
			console.log(`Server started at ${this.config.port}`);
		})
	}
}

module.exports = { initServer };
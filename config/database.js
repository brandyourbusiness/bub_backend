import mongoose from "mongoose";

class initDatabase {
	constructor(config, options) {
		this.config = config;
		this.setUp();
	}

	setUp() {
		mongoose.set('useCreateIndex', true);
		mongoose.connect(this.config.mongo_url, this.config.mongo_options);
	}
}

module.exports = { initDatabase };
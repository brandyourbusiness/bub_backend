import mongoose from "mongoose";

class Entities {
	constructor(config, entities) {
		this.config = config;
		this.entities = entities;
		this.config["entities"] = {};
		this.initEntities();
	}

	initEntities() {
		for(let entity in this.entities) {
			/*
				To handle error, if entity is already exists in database.
				
				if(this.config["entities"][entity]) {
					throw new Error("Already " + entity + " exists in database");
				}
			*/
			this.config["entities"][entity] = new mongoose.model(entity, this.entities[entity], entity);
		}
	}
}

module.exports = { Entities };
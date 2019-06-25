import { Entities } from "./entities";

class initGlobal {
	constructor(config, options) {
		this.entities = new Entities(config, options.entities);
	}
}

module.exports = initGlobal;
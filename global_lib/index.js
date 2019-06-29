import { Entities } from "./entities";
import { Jobs } from "./jobs";

class initGlobal {
	constructor(config, options) {
		this.entities = new Entities(config, options.entities);
		this.jobs = new Jobs(config, options.jobs);
	}
}

module.exports = initGlobal;
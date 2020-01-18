import { Entities } from "./entities";
import { Jobs } from "./jobs";
import { Workflows } from "./workflows";
import { Actions } from "./actions";
import Roles from "./roles";

class initGlobal {
	constructor(config, options) {
		this.config = config;
		// Function based
		this.config["roles"] = Roles;
		// Class based
		this.entities = new Entities(this.config, options.entities);
		this.jobs = new Jobs(this.config, options.jobs);
		this.config["workflows"] = new Workflows(this.config, options.workflows);
		this.actions = new Actions(this.config, options.actions);
	}
}

module.exports = initGlobal;
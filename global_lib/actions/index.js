class Actions {
	constructor(config, actions) {
		this.config = config;
		this.actions = actions;
		this.config["actions"] = {}
		this.initActions();
	}

	initActions() {
		for(let action in this.actions) {
			this.config["actions"][action] = this.actions[action];
		}
	}
}

module.exports = { Actions }
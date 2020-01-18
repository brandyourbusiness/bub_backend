class Workflows {
	constructor(config, workflows) {
		this.config = config;
		this.workflows = workflows;
		// this.config["workflows"] = [];
		this.initWorkflows();
	}

	initWorkflows() {
		// for (let workflow in this.workflows) {
		// 	/* Handle errors
		// 	if (this.config["workflows"][workflow]) {
		// 		throw new Error("Already " + workflow + " exists for this user");
		// 	}
		// 	*/
		// 	if (this.verifyUserRole(this.workflows[workflow])) {
		// 		let workflowObj = Object.assign(this.workflows[workflow], {
		// 			route: "/" + workflow
		// 		});
		// 		this.config["workflows"].push(workflowObj);
		// 	}
		// }
		for (let workflow of this.workflows) {
			workflow["pathname"] = "/" + workflow.route;
		}
	}

	find(args = {}) {
		var promise = Promise.resolve(
			this.workflows.filter(workflow => {
				let workflowStatus = false;
				// If there are no workflow conditions
				if (
					!workflow.hasOwnProperty("verified") &&
					!workflow.hasOwnProperty("auth_required") &&
					!workflow.hasOwnProperty("roles")
				) {
					return true;
				}
				// If there are conditions
				for (let key in args) {
					if (
						(workflow.hasOwnProperty(key) && workflow[key] !== args[key]) ||
						(workflow.hasOwnProperty("roles") &&
							!workflow.roles.find(role => role === args["role"]))
					) {
						workflowStatus = false;
						break;
					}
					workflowStatus = true;
				}
				return workflowStatus;
			})
		);

		return promise;
	}

	verifyUserRole(workflow) {
		return this.config.roles(this.config, workflow, role);
	}
}

module.exports = { Workflows };

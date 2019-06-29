class Jobs {
	constructor(config, jobs) {
		this.config = config;
		this.jobs = jobs;
		this.config["jobs"] = {};
		this.initJobs();
	}

	initJobs() {
		for(let job in this.jobs) {
			this.config["jobs"][job] = this.jobs[job];
		}
	}
}

module.exports = { Jobs };
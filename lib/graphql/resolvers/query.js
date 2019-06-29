module.exports = (config, options) => ({
	hello: () => 'world!',
	getAllUsers: () => {
		return config.entities.users.find({});
	},
	getAllBrands: () => {
		return config.entities.brands.find({});
	},
	getAllFormsList: (parent, args, context, info) => {
		return { list: options };
	},
	runJobs: async (parent, args, context, info) => {
		let { job_name, job_options } = args;
		let jobResults = [];
		for (let job of job_name) {
			let result = await config.jobs[job](job_options);
			jobResults.push(result);
		}
		return {
			job_results: jobResults
		}
	}
});
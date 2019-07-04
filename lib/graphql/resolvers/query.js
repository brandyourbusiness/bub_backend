module.exports = (config, options) => ({
	hello: () => 'world!',
	getAllUsers: () => {
		return config.entities.users.find({});
	},
	getUserById: async (parent, args, context, info) => {
		return config.entities.users.find({_id: args.id});
	},
	getAllBrands: () => {
		return config.entities.brands.find({});
	},
	getBrandById: async (parent, args, context, info) => {
		return config.entities.brands.find({_id: args.id});
	},
	getBrandByQuery: async (parent, args, context, info) => {
		return config.entities.brands.find(args.condition);
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
	},
	getAllCoupons: async (parent, args, context, info) => {
		return config.entities.coupons.find({});
	},
	getCouponById: async (parent, args, context, info) => {
		return config.entities.coupons.find({_id: args.id});
	},
	getCouponByQuery: async (parent, args, context, info) => {
		return config.entities.coupons.find(args.condition);
	}
});
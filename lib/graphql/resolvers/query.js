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
	}
});
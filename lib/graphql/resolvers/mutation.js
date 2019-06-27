module.exports = (config, options) => ({
	createCat: async(_, {name, age}) => {
		const cat = Cat({name, age});
		return cat.save();
	},
	createUser: async(_, { input }) => {
		input["created_at"] = new Date();
		return config.entities.users(input).save();
	},
	updateUser: async(_, {id, input}) => {
		input["updated_at"] = new Date();
		return config.entities.users
			.findOneAndUpdate({_id: id}, input, {}, (err, data) => data)
	},
	createBrand: async(_, { input }) => {
		input["created_at"] = new Date();
		return config.entities.brands(input).save();
	},
	updateBrand: async(_, {id, input}) => {
		input["updated_at"] = new Date();
		return config.entities.brands
			.findOneAndUpdate({_id: id}, input, {}, (err, data) => data)
	}
})
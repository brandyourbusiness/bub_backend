import { UserInputError } from 'apollo-server-express';

module.exports = (config, options) => ({
	createCat: async(_, {name, age}) => {
		const cat = Cat({name, age});
		return cat.save();
	},
	getUser: async (_, {email, input}, context) => {
		console.log("INPUT", input, email)
		return config.entities.users.find({"email": email}).then(res => {
			if (res.length === 0) {
				input["email"] = email;
				return config.entities.users(input).save();
			}
			return res[0];
		})
	},
	createUser: async(_, { input }) => {
		input["created_at"] = new Date();
		return config.entities.users(input).save();
	},
	updateUserById: async(_, {id, input}) => {
		input["updated_at"] = new Date();
		return config.entities.users
			.findOneAndUpdate({_id: id}, input, {}, (err, data) => data)
	},
	createBrand: async(_, { input }) => {
		input["created_at"] = new Date();
		return config.entities.brands(input).save();
	},
	updateBrandById: async(_, {id, input}) => {
		input["updated_at"] = new Date();
		return config.entities.brands
			.findOneAndUpdate({_id: id}, input, {}, (err, data) => data)
	},
	createCoupon: async(parent, { input }, context, info) => {
		input["coupon_code"] = await config.jobs.generate_otp();
		if (input !== 'expected') {
			throw new UserInputError('Form Argument Invalid', {
				invalidArgs: Object.keys(args)
			})
		}		
		return config.entities.coupons(input).save();
	},
	updateCouponById: async (parent, {id, input}, context, info) => {
		input["updated_at"] = new Date();
		input["coupon_code"] = await config.jobs.generate_otp();
		
		return config.entities.coupons
			.findOneAndUpdate({_id: id}, input, {}, (err, data) => data)
	}
})
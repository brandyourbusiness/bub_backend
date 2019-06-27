import { gql } from 'apollo-server-express';
import GraphqlQLJSON from 'graphql-type-json';
import { Cat } from './models';
import formList from '../lib/modules/form_list';
import resolvers from '../lib/graphql/resolvers';

class initGraphqlSchema {
	constructor(config, options) {
		this.config = config;
		this.options = options;
		this.entities = config.entities;
		this.setUp();
	}

	setUp() {
		this.options["typeDefs"] = gql`
			scalar Date
			scalar JSON

			type Cat {
				id: ID!
				name: String!
				age: Int
			}

			type User {
				id: ID!
				name: String
				email: String
				address: String
				city: String
				state: String
				country: String
				zip_code: String
				contact: String
				gst_number: String
				pan_number: String
				admin: Boolean
				verified: Boolean
			}

			type Brand {
				id: ID!
				name: String
				email: String
				address: String
				city: String
				state: String
				country: String
				zip_code: String
				category: String
				sub_category: String
				description: String
				discount: String
				image_url: String
				image_name: String
				verified: Boolean
			}

			type FormsList {
				list: [JSON]
			}

			input UserInput {
				name: String
				email: String
				address: String
				city: String
				state: String
				country: String
				zip_code: String
				contact: String
				gst_number: String
				pan_number: String
				admin: Boolean
				verified: Boolean
			}

			input BrandInput {
				name: String
				email: String
				address: String
				city: String
				state: String
				country: String
				zip_code: String
				category: String
				sub_category: String
				description: String
				discount: String
				image_url: String
				image_name: String
				verified: Boolean
			}

			type Query {
				hello: String
				getAllUsers: [User!]
				getAllBrands: [Brand!]
				getAllFormsList: FormsList
			}

			type Mutation {
				createCat(name: String!, age: Int): Cat!
				createUser(input: UserInput): User
				updateUser(id: ID!, input: UserInput): User
				createBrand(input: BrandInput): Brand
				updateBrand(id: ID!, input: BrandInput): Brand
			}
		`;
		this.options["resolvers"] = resolvers(this.config, formList);
		// this.options["resolvers"] = {
		// 	JSON: GraphqlQLJSON,
		// 	Query: {
		// 		hello: () => 'world!',
		// 		getAllUsers: () => {
		// 			return this.config.entities.users.find({});
		// 		},
		// 		getAllBrands: () => {
		// 			return this.config.entities.brands.find({});
		// 		},
		// 		getAllFormsList: (parent, args, context, info) => {
		// 			return { list: formList };
		// 		}
		// 	},
		// 	Mutation: {
		// 		createCat: async(_, {name, age}) => {
		// 			const cat = Cat({name, age});
		// 			return cat.save();
		// 		},
		// 		createUser: async(_, { input }) => {
		// 			input["created_at"] = new Date();
		// 			return this.config.entities.users(input).save();
		// 		},
		// 		updateUser: async(_, {id, input}) => {
		// 			input["updated_at"] = new Date();
		// 			return this.config.entities.users
		// 				.findOneAndUpdate({_id: id}, input, {}, (err, data) => data)
		// 		},
		// 		createBrand: async(_, { input }) => {
		// 			input["created_at"] = new Date();
		// 			return this.config.entities.brands(input).save();
		// 		},
		// 		updateBrand: async(_, {id, input}) => {
		// 			input["updated_at"] = new Date();
		// 			return this.config.entities.brands
		// 				.findOneAndUpdate({_id: id}, input, {}, (err, data) => data)
		// 		}
		// 	}			
		// }
	}
}

module.exports = { initGraphqlSchema };
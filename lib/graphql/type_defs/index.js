import { gql } from 'apollo-server-express';

module.exports = (config, options) => gql`
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
		image_url: String
		google_id: String
		created_at: Date
		updated_at: Date
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
		discount_rate: String
		image_url: String
		image_name: String
		verified: Boolean
	}

	type Coupon {
		id: ID!
		coupon_code: String
		referrer: String
		referrer_id: String
		consumer: String
		expiry_date: Date
		brand_id: String
		brand: [Brand]
		created_at: String
		updated_at: String
	}

	type FormsList {
		list: [JSON]
	}

	type ExecuteJobs {
		job_name: [String!]
		job_options: JSON
		job_results: [JSON]
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
		image_url: String
		google_id: String
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

	input CouponInput {
		coupon_code: String
		referrer: String
		consumer: String
		expiry_date: Date
		referrer_id: String!
		brand_id: String!
		updated_at: String
	}

	type Query {
		hello: String
		getAllUsers: [User!]
		getAllBrands: [Brand!]
		getAllFormsList: FormsList
		runJobs(job_name: [String!], job_options: JSON): ExecuteJobs
	}

	type Mutation {
		createCat(name: String!, age: Int): Cat!
		getUser(email: String!, input: UserInput): User
		createUser(input: UserInput): User
		updateUserById(id: ID!, input: UserInput): User
		createBrand(input: BrandInput): Brand
		updateBrandById(id: ID!, input: BrandInput): Brand
		createCoupon(input: CouponInput): Coupon
		updateCouponById(id: ID!, input: CouponInput): Coupon
	}
`;
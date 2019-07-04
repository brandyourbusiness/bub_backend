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
		contact: String
		user_id: String
		created_at: Date
		updated_at: Date
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
		created_at: Date
		updated_at: Date
	}

	type FormsList {
		list: JSON
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
		discount_rate: String
		image_url: String
		image_name: String
		verified: Boolean
		contact: String
		user_id: String
	}

	input CouponInput {
		coupon_code: String
		referrer: String
		consumer: String
		expiry_date: Date
		referrer_id: String!
		brand_id: String!
	}

	input CouponQueryInput {
		coupon_code: String
		referrer: String
		consumer: String
		expiry_date: JSON
		referrer_id: String
		brand_id: String
		created_at: JSON
	}

	input BrandQueryInput {
		email: String
		city: String
		state: String
		country: String
		zip_code: String
		category: String
		sub_category: String
		discount_rate: String
		verified: Boolean
		user_id: String
		created_at: JSON
	}

	type Query {
		hello: String
		getAllUsers: [User!]
		getUserById(id: ID!): [User]
		getAllBrands: [Brand!]
		getBrandById(id: ID!): [Brand]
		getBrandByQuery(condition: BrandQueryInput): [Brand]
		getAllFormsList: FormsList
		runJobs(job_name: [String!], job_options: JSON): ExecuteJobs
		getAllCoupons: [Coupon!]
		getCouponById(id: ID!): [Coupon]
		getCouponByQuery(condition: CouponQueryInput): [Coupon]
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
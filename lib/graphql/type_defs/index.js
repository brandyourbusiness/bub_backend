import { gql } from 'apollo-server-express';

module.exports = (config, options) => gql`
	scalar Date
	scalar JSON

	type Cat {
		id: ID!
		name: String!
		age: Int
	}

	type Workflow {
		slug: String
		icon: String
		pathname: String
		role: String
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
		roles: [String]
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
		discount_rate: Float
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
		status: String
		referrer: String
		referrer_id: String
		consumer: String
		expiry_date: Date
		brand_id: String
		total_purchase_amount: Float
		discounted_amount: Float
		total_paid_amount: Float
		referral_amount: Float
		bub_amount: Float
		vendor_payment_status: String
		vendor_transaction_id: String
		referral_payment_status: String
		invoice_created_at: Date
		created_at: Date
		updated_at: Date
	}

	type Transaction {
		id: ID!
		coupons_list: [String]
		brand_id: String
		amount: Float
		payment_mode: JSON
		status: String
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
		roles: [String]
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
		discount_rate: Float
		image_url: String
		image_name: String
		verified: Boolean
		contact: String
		user_id: String
	}

	input CouponInput {
		coupon_code: String
		status: String
		referrer: String
		consumer: String
		expiry_date: Date
		referrer_id: String
		brand_id: String
		total_purchase_amount: Float
		total_paid_amount: Float
		discounted_amount: Float
		referral_amount: Float
		bub_amount: Float
		invoice_created_at: Date
		vendor_payment_status: String
	}

	input CouponQueryInput {
		coupon_code: String
		referrer: String
		consumer: String
		expiry_date: JSON
		referrer_id: String
		brand_id: String
		status: String
		vendor_payment_status: String
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
		discount_rate: Float
		verified: Boolean
		user_id: String
		created_at: JSON
	}

	input WorkflowQueryInput {
		verified: Boolean!
		auth_required: Boolean!
		role: String!
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
		getAllWorkflows(condition: WorkflowQueryInput): [Workflow]
	}

	type Mutation {
		createCat(name: String!, age: Int): Cat!
		getUser(email: String!, input: UserInput): User
		createUser(input: UserInput): User
		updateUserById(id: ID!, input: UserInput): User
		updateUserByEmail(email: String!, input: UserInput): User
		createBrand(input: BrandInput): Brand
		updateBrandById(id: ID!, input: BrandInput): Brand
		createCoupon(input: CouponInput): Coupon
		updateCouponById(id: ID!, input: CouponInput): Coupon
	}
`;
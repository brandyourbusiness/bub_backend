module.exports = {
	name: { type: String },
	email: { type: String, index: true },
	address: { type: String },
	city: { type: String },
	state: { type: String },
	country: { type: String },
	zip_code: { type: Number },
	category: { type: String },
	sub_category: { type: String },
	description: { type: String },
	discount: { type: String },
	image_url: { type: String },
	image_name: { type: String },
	verified: { type: Boolean },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
}
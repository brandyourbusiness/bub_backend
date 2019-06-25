module.exports = {
	name: { type: String },
	email: { type: String, index: true },
	address: { type: String },
	city: { type: String },
	state: { type: String },
	country: { type: String },
	zip_code: { type: String },
	contact: { type: String },
	gst_number: { type: String },
	pan_number: { type: String },
	admin: { type: Boolean },
	verified: { type: Boolean },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
}
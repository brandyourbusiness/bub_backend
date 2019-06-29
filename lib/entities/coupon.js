module.exports = {
	coupon_code: { type: String },
	referrer: { type: String },
	referrer_id: { type: String },
	consumer: { type: String },
	expiry_date: { type: Date },
	brand_id: { type: String },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
}
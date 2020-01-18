module.exports = {
	coupons_list: { type: Array },
	brand_id: { type: String },
	amount: { type: Number },
	payment_mode: { type: Object },
	status: { type: String },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
}
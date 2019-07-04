module.exports = [
	{
		label: "Name",
		division: 6
	},
	{
		label: "Email",
		type: "email",
		division: 6,
		disabled: true
	},
	{
		label: "Address",
		division: 6
	},
	{
		label: "City",
		division: 6
	},
	{
		label: "State",
		division: 4
	},
	{
		label: "Country",
		division: 4
	},
	{
		label: "Pin code",
		type: "number",
		division: 4,
		dbName: "zip_code"
	},
	{
		label: "Contact",
		type: "number",
		division: 4,
		required: true
	},
	{
		label: "GST Number",
		type: "number",
		division: 4,
		required: true,
		dbName: "gst_number"
	},
	{
		label: "PAN Number",
		type: "number",
		division: 4,
		required: true,
		dbName: "pan_number"
	},
	{
		label: "Admin",
		type: "checkbox",
		division: 4
	}
];

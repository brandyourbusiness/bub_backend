module.exports = [
	{
		label: "Brand Name",
		division: 6,
		dbName: "name",
		required: true
	},
	{
		label: "Email",
		type: "email",
		division: 6,
		required: true
	},
	{
		label: "Description",
		type: "text-area",
		division: 12
	},
	{
		label: "Discount",
		type: "number",
		division: 4,
		dbName: "discount_rate",
		placeholder: "Enter in % only",
		required: true
	},
	{
		label: "Category",
		type: "dropdown",
		division: 4,
		values: [
			{ key: "beauty_salon", value: "Beauty & Salon" },
			{ key: "food_drinks", value: "Food & Drinks" },
			{ key: "gym_fitness", value: "Gym & Fitness"},
			{ key: "shopping_retail", value: "Shopping & Retail" },
			{ key: "travel_leisure", value: "Travel & Leisure" },
			{ key: "tutorials_learning", value: "Tutorials & Learning" },
		],
		required: true
	},
	{
		label: "Sub category",
		type: "dropdown",
		division: 4,
		required: true
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
		division: 4,
		required: true
	},
	{
		label: "Country",
		division: 4,
		value: "India",
		disabled: true
	},
	{
		label: "Pin code",
		type: "number",
		division: 4,
		dbName: "zip_code",
		required: true
	},
	{
		label: "Contact",
		type: "number",
		division: 4,
		required: true
	},
	{
		label: "Image",
		type: "file",
		division: 8,
		dbName: "image_url"
	},
	{
		label: "Verified Status",
		type: "checkbox",
		division: 4,
		disabled: true,
		dbName: "verified"
	}
];

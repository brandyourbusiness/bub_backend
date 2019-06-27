module.exports.user = [
	{
		label: "Email",
		type: "email",
		division: 6
	},
	{
		label: "Password",
		type: "password",
		division: 6
	},
	{
		label: "showKYC",
		group: "showkyc",
		type: "toggle",
		division: 2,
		values: [
			{
				label: "Email",
				type: "email",
				division: 6
			},
			{
				label: "Password",
				type: "password",
				division: 6
			}
		]
	}
];

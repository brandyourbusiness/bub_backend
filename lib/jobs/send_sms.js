"use strict"

const accSid = process.env.TWILIO_ACCOUNT_SID || "ACbfcae3462823985e9e23c37f9ba117b7";
const authToken = process.env.TWILIO_AUTH_TOKEN || "4e4ce0eefee4e1110ef2e10757d412ba";
const twilioClient = require('twilio')(accSid, authToken);

module.exports = (options) => {
	return twilioClient
		.messages
		.create({
			body: options.body,
			from: "+12017304179",
			to: options.to
		})
		.then(data => {
			console.log(data);
			return {
				status: data.status,
				message: "Successfully sent."
			}
		})
		.catch(e => {
			console.log(e)
			return {
				status: 500,
				message: "Error in sending sms to user"
			}
		})
}
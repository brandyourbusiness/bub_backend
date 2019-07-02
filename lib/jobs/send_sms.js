"use strict"
require('dotenv').config();

const accSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
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
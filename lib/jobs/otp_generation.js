"use strict"

module.exports = () => {
	var acceptedChars = "0123456789";
	var otp = "";
	var requireLength = acceptedChars.length;

	for (let i = 0; i < 5; i++) {
		otp += acceptedChars[Math.floor(Math.random() * 10)]
	}
	return otp;
}
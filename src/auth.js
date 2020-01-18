const verifyUserWithEmail = (config, details) => {
	return config.entities.users.find(details).then(res => {
		if (res.length === 0) {
			return config.entities.users(details).save();
		}
		return res[0];
	})
}

module.exports = {
	verifyUserWithEmail
}
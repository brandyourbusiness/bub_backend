module.exports = (config, option) => {
	// If a user is not signed in
	if (!option.roles) return true;
	if (!config.user) return false;
	// If a user has multiple roles
	if (config.user.roles && config.user.roles instanceof Array) {
		let isOptionExists = false;
		for (let i = 0; i <= config.user.roles.length; i++) {
			let isExists = option.roles.find(role === config.user.roles[i]);
			if (!!isExists) {
				isOptionExists = true;
				break;
			}
		}
		return isOptionExists;
	}
	// If a user has only one role
	return !!option.roles.find(role => role === config.user.roles);
};

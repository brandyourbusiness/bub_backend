class deleteDocument {
	constructor(config, entity, options) {
		this.config = config;
	}

	delete(entity, values) {
		this.config.entities.entity.insertOne(values, (err, res) => {
			if (err) {
				throw new Error(err)
			}
			console.log("RESULT", res)
		})
	}
}

module.exports = { deleteDocument }
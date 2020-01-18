class CreateDocument {
	constructor(config, entity, options) {
		this.config = config;
	}

	create(entity, values) {
		this.config.entities.entity.insertOne(values, (err, res) => {
			if (err) {
				throw new Error(err)
			}
			console.log("RESULT", res)
		})
	}
}

module.exports = { CreateDocument }
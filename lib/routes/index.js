class Routes {
	constructor(config, options) {
		this.config = config;
		this.options = options;
		this.setUp();
	}

	setUp() {
		this.config.app.use('/api/send_sms', async (req, res) => {
			console.log("req.body", req.body)
		});
	}

	authorizeRoutes() {
		this.config.app.use('/api', (req, res) => {

			this.config.server({
				context: req.user
			})
		})
	}
}

module.exports = Routes;
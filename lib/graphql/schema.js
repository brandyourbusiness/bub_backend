import typeDefs from './type_defs';
import resolvers from './resolvers';
import formList from '../modules/form_list';

class initGraphqlSchema {
	constructor(config, options) {
		this.config = config;
		this.options = options;
		this.setUp();
	}

	setUp() {
		this.options["typeDefs"] = typeDefs(this.config, this.options);
		this.options["resolvers"] = resolvers(this.config, formList);
	}
}

module.exports = { initGraphqlSchema }
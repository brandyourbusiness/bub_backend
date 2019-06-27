import { merge } from "lodash";
import queryResolvers from './query';
import mutationResolvers from './mutation';
import customResolvers from './custom';

module.exports = (config, options) => 
	merge({
		Query: queryResolvers(config, options),
		Mutation: mutationResolvers(config, options)
	}, customResolvers(config, options))
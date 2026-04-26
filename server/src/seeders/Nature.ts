import { Nature } from "../models/index.js";

import jsonNatures from "../data/Nature.json" with { type: "json" };

export default {
	up: async () => {
		try {
			await Nature.bulkCreate(jsonNatures);
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

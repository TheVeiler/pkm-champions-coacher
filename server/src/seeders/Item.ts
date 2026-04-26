import { Item } from "../models/index.js";

import jsonItems from "../data/Item.json" with { type: "json" };

export default {
	up: async () => {
		try {
			await Item.bulkCreate(jsonItems);
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

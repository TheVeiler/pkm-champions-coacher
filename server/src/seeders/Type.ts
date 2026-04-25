import { Type } from "../models/index.js";

import jsonTypes from "./Type.json" with { type: "json" };

export default {
	up: async () => {
		try {
			await Type.bulkCreate(jsonTypes.map(({ name, image }) => ({ name, image })));
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

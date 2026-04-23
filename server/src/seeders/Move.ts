import { Move } from "../models/index.js";

import jsonMoves from "./Move.json" with { type: "json" };

export default {
	up: async () => {
		try {
			await Move.bulkCreate(jsonMoves);
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

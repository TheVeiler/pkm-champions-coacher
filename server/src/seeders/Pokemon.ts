import { Pokemon } from "../models/index.js";

import jsonPokemons from "./Pokemon.json" with { type: "json" };

export default {
	up: async () => {
		try {
			await Pokemon.bulkCreate(jsonPokemons);
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

import { Ability } from "../models/index.js";

import jsonAbilities from "./Ability.json" with { type: "json" };

export default {
	up: async () => {
		try {
			await Ability.bulkCreate(jsonAbilities);
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

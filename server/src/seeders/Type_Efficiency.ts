import { Type_Efficiency } from "../models/index.js";

import jsonTypes from "./Type.json" with { type: "json" };

export default {
	up: async () => {
		try {
			for (const { name, weakTo, resists, immuneTo } of jsonTypes) {
				const defending = name;

				await Type_Efficiency.bulkCreate(
					weakTo.map((attacking) => ({ defending, attacking, efficiency: 2 })),
				);
				await Type_Efficiency.bulkCreate(
					resists.map((attacking) => ({ defending, attacking, efficiency: 0.5 })),
				);
				await Type_Efficiency.bulkCreate(
					immuneTo.map((attacking) => ({ defending, attacking, efficiency: 0 })),
				);
			}
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

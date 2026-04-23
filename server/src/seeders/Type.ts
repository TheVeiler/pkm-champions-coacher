import { Type, TypeEfficiency } from "../models/index.js";

import jsonTypes from "./Type.json" with { type: "json" };

export default {
	up: async () => {
		try {
			await Type.bulkCreate(jsonTypes.map(({ name }) => ({ name })));

			for (const { name, weakTo, resists, immuneTo } of jsonTypes) {
				const defending = name;

				await TypeEfficiency.bulkCreate(
					weakTo.map((attacking) => ({ defending, attacking, efficiency: 2 })),
				);
				await TypeEfficiency.bulkCreate(
					resists.map((attacking) => ({ defending, attacking, efficiency: 0.5 })),
				);
				await TypeEfficiency.bulkCreate(
					immuneTo.map((attacking) => ({ defending, attacking, efficiency: 0 })),
				);
			}
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

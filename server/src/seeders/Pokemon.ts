import { Pokemon } from "../models/index.js";

import jsonPart1 from "../data/Pokemon.part1.json" with { type: "json" };
import jsonPart2 from "../data/Pokemon.part2.json" with { type: "json" };
import jsonPart3 from "../data/Pokemon.part3.json" with { type: "json" };
import jsonPart4 from "../data/Pokemon.part4.json" with { type: "json" };
import jsonPart5 from "../data/Pokemon.part5.json" with { type: "json" };
import jsonPart6 from "../data/Pokemon.part6.json" with { type: "json" };
import jsonPart7 from "../data/Pokemon.part7.json" with { type: "json" };
import jsonPart8 from "../data/Pokemon.part8.json" with { type: "json" };
import jsonPart9 from "../data/Pokemon.part9.json" with { type: "json" };

const jsonPokemons = [
	...jsonPart1,
	...jsonPart2,
	...jsonPart3,
	...jsonPart4,
	...jsonPart5,
	...jsonPart6,
	...jsonPart7,
	...jsonPart8,
	...jsonPart9,
];

export default {
	up: async () => {
		try {
			await Pokemon.bulkCreate(
				jsonPokemons.map(({ no, name, name_en, image, base_stats, real_stats }) => ({
					no,
					name,
					name_en,
					image,

					base_hp: base_stats.hp,
					base_atk: base_stats.atk,
					base_def: base_stats.def,
					base_spatk: base_stats.spatk,
					base_spdef: base_stats.spdef,
					base_spe: base_stats.spe,

					real_hp: real_stats.hp,
					real_atk: real_stats.atk,
					real_def: real_stats.def,
					real_spatk: real_stats.spatk,
					real_spdef: real_stats.spdef,
					real_spe: real_stats.spe,
				})),
			);
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

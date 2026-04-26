import { Pokemon_has_Type } from "../models/index.js";

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
			await Pokemon_has_Type.bulkCreate(
				jsonPokemons
					.map(({ name, types }) => types.map((type) => ({ pokemon: name, type })))
					.flat(),
			);
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

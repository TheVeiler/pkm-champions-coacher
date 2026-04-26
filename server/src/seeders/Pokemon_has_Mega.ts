import { Pokemon_has_Mega } from "../models/index.js";

import jsonPart1 from "./Pokemon.part1.json" with { type: "json" };
import jsonPart2 from "./Pokemon.part2.json" with { type: "json" };
import jsonPart3 from "./Pokemon.part3.json" with { type: "json" };
import jsonPart4 from "./Pokemon.part4.json" with { type: "json" };
import jsonPart5 from "./Pokemon.part5.json" with { type: "json" };
import jsonPart6 from "./Pokemon.part6.json" with { type: "json" };
import jsonPart7 from "./Pokemon.part7.json" with { type: "json" };
import jsonPart8 from "./Pokemon.part8.json" with { type: "json" };
import jsonPart9 from "./Pokemon.part9.json" with { type: "json" };

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
			await Pokemon_has_Mega.bulkCreate(
				jsonPokemons
					.map((pokemon) =>
						pokemon.megas.map((mega) => ({
							base_pokemon: pokemon.name,
							mega_pokemon: mega.pokemon,
							stone: mega.stone,
						})),
					)
					.flat(),
			);
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

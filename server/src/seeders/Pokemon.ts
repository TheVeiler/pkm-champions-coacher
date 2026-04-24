import { Pokemon } from "../models/index.js";

import jsonPokemons from "./Pokemon.json" with { type: "json" };

export default {
	up: async () => {
		try {
			await Pokemon.bulkCreate(jsonPokemons.map(({
                no,
                name,
                name_en,
                image,
                base_stats,
                real_stats
            }) => ({
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
            })));

            // Pokemon_has_Ability
            // Pokemon_has_Mega
            // Pokemon_has_Move
            // Pokemon_has_Type
		} catch (e) {
			console.error(e);
		}
	},

	down: async () => {},
};

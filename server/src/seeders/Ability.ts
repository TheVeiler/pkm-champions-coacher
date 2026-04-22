import { Ability } from "../models/index.js";

import jsonAbilities from "./Ability.json" with { type: "json" };

try {
	await Ability.bulkCreate(jsonAbilities);
} catch (e) {
	console.error(e);
}

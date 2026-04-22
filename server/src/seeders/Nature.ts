import { Nature } from "../models/index.js";

import jsonNatures from "./Nature.json" with { type: "json" };

try {
	await Nature.bulkCreate(jsonNatures);
} catch (e) {
	console.error(e);
}

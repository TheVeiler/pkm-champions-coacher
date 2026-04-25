import {
	Ability,
	Item,
	Move,
	Nature,
	Pokemon,
	Pokemon_has_Type,
	Type,
	Type_Efficiency,
} from "./src/seeders/index.js";

await Type.up();
await Ability.up();
await Item.up();
await Move.up();
await Nature.up();
await Pokemon.up();

await Type_Efficiency.up();
await Pokemon_has_Type.up();

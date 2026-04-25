import {
	Ability,
	Item,
	Move,
	Nature,
	Pokemon,
	Type,
    
	Type_Efficiency,
	Pokemon_has_Type,
} from "./src/seeders/index.js";

await Ability.up();
await Item.up();
await Move.up();
await Nature.up();
await Pokemon.up();
await Type.up();

await Type_Efficiency.up();
await Pokemon_has_Type.up();

import sequelize from "./src/sequelize.js";

import {
	Ability,
	Item,
	Move,
	Nature,
	Pokemon,
	Pokemon_has_Ability,
	Pokemon_has_Mega,
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
await Pokemon_has_Ability.up();
await Pokemon_has_Mega.up();
await Pokemon_has_Type.up();

sequelize.close();

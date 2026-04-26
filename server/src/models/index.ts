import sequelize from "../sequelize.js";

import { default as AbilityModel } from "./Ability.js";
import { default as ItemModel } from "./Item.js";
import { default as MoveModel } from "./Move.js";
import { default as NatureModel } from "./Nature.js";
import { default as PokemonModel } from "./Pokemon.js";
import { default as PokemonHasAbilityModel } from "./Pokemon_has_Ability.js";
import { default as PokemonHasMegaModel } from "./Pokemon_has_Mega.js";
import { default as PokemonHasMoveModel } from "./Pokemon_has_Move.js";
import { default as PokemonHasTypeModel } from "./Pokemon_has_Type.js";
import { default as TypeModel } from "./Type.js";
import { default as TypeEfficiencyModel } from "./Type_Efficiency.js";

const Ability = sequelize.define("Abilities", AbilityModel, { timestamps: false });
const Item = sequelize.define("Items", ItemModel, { timestamps: false });
const Move = sequelize.define("Moves", MoveModel, { timestamps: false });
const Nature = sequelize.define("Natures", NatureModel, { timestamps: false });
const Pokemon = sequelize.define("Pokemons", PokemonModel, { timestamps: false });
const Pokemon_has_Ability = sequelize.define("Pokemons_have_Abilities", PokemonHasAbilityModel, {
	timestamps: false,
});
const Pokemon_has_Mega = sequelize.define("Pokemons_have_Megas", PokemonHasMegaModel, {
	timestamps: false,
});
const Pokemon_has_Move = sequelize.define("Pokemons_have_Moves", PokemonHasMoveModel, {
	timestamps: false,
});
const Pokemon_has_Type = sequelize.define("Pokemons_have_Types", PokemonHasTypeModel, {
	timestamps: false,
});
const Type = sequelize.define("Types", TypeModel, { timestamps: false });
const Type_Efficiency = sequelize.define("Type_Efficiencies", TypeEfficiencyModel, {
	timestamps: false,
});

//? One Move can only have one Type
Move.belongsTo(Type, { foreignKey: "type" });
//? One Type can be possessed by multiple Moves
Type.hasMany(Move, { foreignKey: "type" });

//? One Pokemon can have multiple Abilities
Pokemon.belongsToMany(Ability, { through: Pokemon_has_Ability, foreignKey: "pokemon" });
//? One Ability can be owned by multiple Pokemons
Ability.belongsToMany(Pokemon, { through: Pokemon_has_Ability, foreignKey: "ability" });

//? One Pokemon can evolve into multiple Pokemons (e.g. Charizard)
Pokemon.belongsToMany(Pokemon, {
	as: "base",
	through: Pokemon_has_Mega,
	foreignKey: "base_pokemon",
});
//? One Mega can be the evolution of multiple Pokemons (e.g. Meowstic-Mega)
Pokemon.belongsToMany(Pokemon, {
	as: "mega",
	through: Pokemon_has_Mega,
	foreignKey: "mega_pokemon",
});

//? One Pokemon can evolve with multiple Items (e.g. Charizard)
Pokemon.belongsToMany(Item, { through: Pokemon_has_Mega, foreignKey: "base_pokemon" });
//? One Item can serve to evolve multiple Pokemon (e.g. Meowsticite)
Item.belongsToMany(Pokemon, { through: Pokemon_has_Mega, foreignKey: "stone" });

//? One Pokemon can learn multiple Moves
Pokemon.belongsToMany(Move, { through: Pokemon_has_Move, foreignKey: "pokemon" });
//? One Move can be learnt by multiple Pokemon
Move.belongsToMany(Pokemon, { through: Pokemon_has_Move, foreignKey: "move" });

//? One Pokemon can have multiple Types
Pokemon.belongsToMany(Type, { through: Pokemon_has_Type, foreignKey: "pokemon" });
//? One Type can be possessed by multiple Pokemons
Type.belongsToMany(Pokemon, { through: Pokemon_has_Type, foreignKey: "type" });

//? One Type can target multiple Types
Type.belongsToMany(Type, { as: "attacking", through: Type_Efficiency, foreignKey: "attacking" });
//? One Type can be targeted by multiple Types
Type.belongsToMany(Type, { as: "defending", through: Type_Efficiency, foreignKey: "defending" });

await sequelize.sync({ alter: true });

export {
	Ability,
	Item,
	Move,
	Nature,
	Pokemon,
	Pokemon_has_Ability,
	Pokemon_has_Mega,
	Pokemon_has_Move,
	Pokemon_has_Type,
	Type,
	Type_Efficiency,
};

import sequelize from "../sequelize.js";

import { default as AbilityModel } from "./Ability.js";
import { default as ItemModel } from "./Item.js";
import { default as MoveModel } from "./Move.js";
import { default as NatureModel } from "./Nature.js";
import { default as PokemonModel } from "./Pokemon.js";
import { default as PokemonHasTypeModel } from "./Pokemon_has_Type.js";
import { default as TypeModel } from "./Type.js";
import { default as TypeEfficiencyModel } from "./Type_Efficiency.js";

const Ability = sequelize.define("Abilities", AbilityModel, { timestamps: false });
const Item = sequelize.define("Items", ItemModel, { timestamps: false });
const Move = sequelize.define("Moves", MoveModel, { timestamps: false });
const Nature = sequelize.define("Natures", NatureModel, { timestamps: false });
const Pokemon = sequelize.define("Pokemons", PokemonModel, { timestamps: false });
const Pokemon_has_Type = sequelize.define("Pokemons_have_Types", PokemonHasTypeModel, {
    timestamps: false,
});
const Type = sequelize.define("Types", TypeModel, { timestamps: false });
const Type_Efficiency = sequelize.define("Type_Efficiencies", TypeEfficiencyModel, {
	timestamps: false,
});

Type.belongsToMany(Type, { as: "Attacking", through: Type_Efficiency, foreignKey: "attacking" });
Type.belongsToMany(Type, { as: "Defending", through: Type_Efficiency, foreignKey: "defending" });

Pokemon.belongsToMany(Type, { as: "Pokemon", through: Pokemon_has_Type, foreignKey: "pokemon" });
Type.belongsToMany(Pokemon, { as: "Type", through: Pokemon_has_Type, foreignKey: "type" });

await sequelize.sync({ force: true });

export { Ability, Item, Move, Nature, Pokemon, Pokemon_has_Type, Type, Type_Efficiency };

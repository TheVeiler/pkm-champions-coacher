import { DataTypes } from "sequelize";

export default {
	base_pokemon: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
		references: {
			model: "Pokemons",
			key: "name",
		},
	},
	stone: {
		type: DataTypes.STRING,
		allowNull: true,
		primaryKey: true,
		references: {
			model: "Items",
			key: "name",
		},
	},
	mega_pokemon: {
		type: DataTypes.STRING,
		allowNull: false,
		references: {
			model: "Pokemons",
			key: "name",
		},
	},
};

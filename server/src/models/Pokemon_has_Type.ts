import { DataTypes } from "sequelize";

export default {
	pokemon: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
		references: {
			model: "Pokemons",
			key: "name",
		},
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
		references: {
			model: "Types",
			key: "name",
		},
	},
};

import { DataTypes } from "sequelize";

export default {
	attacking: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
		references: {
			model: "Pokemons",
			key: "name",
		},
	},
	defending: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
		references: {
			model: "Types",
			key: "name",
		},
	},
	efficiency: {
		type: DataTypes.INTEGER,
		allowNull: false,
		default: 1,
	},
};

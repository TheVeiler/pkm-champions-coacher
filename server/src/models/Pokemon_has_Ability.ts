import { DataTypes } from "sequelize";

export default {
	pokemon: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	ability: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
};

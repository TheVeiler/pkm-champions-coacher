import { DataTypes } from "sequelize";

export default {
	pokemon: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
};

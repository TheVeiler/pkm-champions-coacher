import { DataTypes } from "sequelize";

export default {
	pokemon: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	move: {
		type: DataTypes.STRING,
		allowNull: true,
		primaryKey: true,
	},
};

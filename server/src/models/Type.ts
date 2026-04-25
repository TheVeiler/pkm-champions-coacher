import { DataTypes } from "sequelize";

export default {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
};

import { DataTypes } from "sequelize";

export default {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
	},
	name_en: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
};

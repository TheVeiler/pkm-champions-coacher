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
	increase: {
		type: DataTypes.STRING,
	},
	decrease: {
		type: DataTypes.STRING,
	},
};

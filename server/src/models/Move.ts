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
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
		references: {
			model: "Types",
			key: "name",
		},
	},
	power: {
		type: DataTypes.INTEGER,
	},
	accuracy: {
		type: DataTypes.INTEGER,
	},
	pp: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	category: {
		type: DataTypes.ENUM,
		values: ["Physique", "Spécial", "Statut"],
		allowNull: false,
	},
};

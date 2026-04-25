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
	no: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},

	base_hp: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	base_atk: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	base_def: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	base_spatk: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	base_spdef: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	base_spe: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},

	real_hp: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	real_atk: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	real_def: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	real_spatk: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	real_spdef: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	real_spe: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
};

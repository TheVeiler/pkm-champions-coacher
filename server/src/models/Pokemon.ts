import { DataTypes, Model } from "sequelize";

import sequelize from "../sequelize.js";

class Pokemon extends Model {
	declare name: string;
	declare name_en: string;
	declare image: string;
	declare no: number;

	declare base_hp: number;
	declare base_atk: number;
	declare base_def: number;
	declare base_spatk: number;
	declare base_spdef: number;
	declare base_spe: number;

	declare real_hp: number;
	declare real_atk: number;
	declare real_def: number;
	declare real_spatk: number;
	declare real_spdef: number;
	declare real_spe: number;
}

Pokemon.init(
	{
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
	},
	{ sequelize, timestamps: false },
);

await Pokemon.sync({ force: true });

export { Pokemon };

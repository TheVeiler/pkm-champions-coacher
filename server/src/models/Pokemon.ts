import { DataTypes, Model } from "sequelize";

import sequelize from "../sequelize.js";

class Pokemon extends Model {
	declare name: string;
	declare name_en: string;
	declare image: string;
	declare no: number;

	declare hp: number;
	declare atk: number;
	declare def: number;
	declare spatk: number;
	declare spdef: number;
	declare spe: number;
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

		hp: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		atk: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		def: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		spatk: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		spdef: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		spe: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{ sequelize, timestamps: false },
);

await sequelize.sync();

export { Pokemon };

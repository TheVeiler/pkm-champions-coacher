import { DataTypes, Model } from "sequelize";

import sequelize from "../sequelize.js";

class Move extends Model {
	declare name: string;
	declare name_en: string;
	declare description: string;
	declare type: string;
	declare power: number;
	declare accuracy: number;
	declare pp: number;
	declare category: string;
}

Move.init(
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
		description: {
			type: DataTypes.TEXT("long"),
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		power: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		accuracy: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 100,
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
	},
	{ sequelize, timestamps: false },
);

await Move.sync({ force: true });

export { Move };

import { DataTypes, Model } from "sequelize";

import sequelize from "../sequelize.js";

type TStat = "hp" | "atk" | "def" | "spatk" | "spdef" | "spe";

class Nature extends Model {
	declare name: string;
	declare name_en: string;
	declare increase: TStat;
	declare decrease: TStat;
}

Nature.init(
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
		increase: {
			type: DataTypes.STRING,
		},
		decrease: {
			type: DataTypes.STRING,
		},
	},
	{ sequelize, timestamps: false },
);

await sequelize.sync();

export { Nature };

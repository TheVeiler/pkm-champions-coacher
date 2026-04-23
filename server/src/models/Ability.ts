import { DataTypes, Model } from "sequelize";

import sequelize from "../sequelize.js";

class Ability extends Model {
	declare name: string;
	declare name_en: string;
	declare description: string;
}

Ability.init(
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
	},
	{ sequelize, tableName: "Abilities", timestamps: false },
);

await Ability.sync({ force: true });

export { Ability };

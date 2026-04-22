import { DataTypes, Model } from "sequelize";

import sequelize from "../sequelize.js";

class Item extends Model {
	declare name: string;
	declare name_en: string;
	declare image: string;
	declare description: string;
}

Item.init(
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
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ sequelize, timestamps: false },
);

await sequelize.sync();

export { Item };

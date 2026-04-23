import { DataTypes, Model } from "sequelize";

import sequelize from "../sequelize.js";

class Type extends Model {
	declare name: string;
}

class TypeEfficiency extends Model {
	declare defending: string;
	declare attacking: string;
	declare efficiency: number;
}

Type.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
	},
	{ sequelize, timestamps: false },
);

TypeEfficiency.init(
	{
		defending: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		attacking: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		efficiency: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 1,
		},
	},
	{ sequelize, timestamps: false },
);

Type.belongsToMany(Type, { as: "Defending", through: TypeEfficiency, foreignKey: "defending" });
Type.belongsToMany(Type, { as: "Attacking", through: TypeEfficiency, foreignKey: "attacking" });

await Type.sync({ force: true });
await TypeEfficiency.sync({ force: true });

export { Type, TypeEfficiency };

import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize.js";

class Type extends Model {}

Type.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
	},
	{ sequelize, modelName: "Type" },
);

await Type.sync();

const typesList = [
	{ name: "acier" },
	{ name: "combat" },
	{ name: "dragon" },
	{ name: "eau" },
	{ name: "électrik" },
	{ name: "fée" },
	{ name: "feu" },
	{ name: "glace" },
	{ name: "insecte" },
	{ name: "normal" },
	{ name: "plante" },
	{ name: "poison" },
	{ name: "psy" },
	{ name: "roche" },
	{ name: "sol" },
	{ name: "spectre" },
	{ name: "ténèbres" },
	{ name: "vol" },
];

for (const { name } of typesList) {
	new Type({ name });
}

export default Type;

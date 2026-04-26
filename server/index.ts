import http from "node:http";
import path from "node:path";
import express from "express";
import cors from "cors";

import { Pokemon, Type } from "./src/models/index.js";

const app = express();
const server = http.createServer(app);

app.set("serverUrl", `${process.env.NODE_PCL}://${process.env.NODE_HST}:${process.env.NODE_PRT}/`);
app.set("frontDir", path.resolve(process.env.PATH_TO_APP ?? "", "client/dist"));

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
	const zard = await Pokemon.findByPk("Dracaufeu", {
		include: [
			{
				model: Type,
			},
		],
	});

	console.log(zard?.dataValues);

	next();
});

switch (process.env.NODE_ENV) {
	case "development":
		app.use((req, res) => {
			res.status(200).send("Backend disponible en mode development.");
		});

		server.listen(Number(process.env.NODE_PRT), process.env.NODE_HST, () => {
			console.log(`Backend disponible en mode développement : ${app.get("serverUrl")}`);
		});
		break;

	case "production":
		app.use(express.static(app.get("frontDir")));
		app.use((req, res) => {
			res.status(200).sendFile(`${app.get("frontDir")}/index.html`);
		});

		server.listen(Number(process.env.NODE_PRT), process.env.NODE_HST, () => {
			console.log(`Backend disponible en mode production : ${app.get("serverUrl")}`);
		});
		break;

	default:
		throw new Error(`Mode d'environnement inconnu : ${process.env.NODE_ENV}`);
}

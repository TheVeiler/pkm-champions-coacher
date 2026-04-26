import { Sequelize } from "sequelize";

const { PG_HST, PG_USR, PG_PWD, PG_DB } = process.env;

const sequelize = new Sequelize(PG_DB ?? "", PG_USR ?? "", PG_PWD, {
	host: PG_HST ?? "",
	dialect: "postgres",
	logging: false,
});

try {
	await sequelize.authenticate();

	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

export default sequelize;

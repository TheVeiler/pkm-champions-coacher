import { Sequelize } from "sequelize";

const { PG_HOST, PG_USER, PG_PWD, PG_DATABASE } = import.meta.env;

const sequelize = new Sequelize(PG_DATABASE, PG_USER, PG_PWD, {
  host: PG_HOST,
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;

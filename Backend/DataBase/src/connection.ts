import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME!,
  process.env.USERNAME!,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Postgres DB");
  } catch (err) {
    console.log(err);
  }
};

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  `postgres://mesckrbmphuvfr:209f710ed1e56a8855af7494b859511252e339340c131818ccf329e76079609f@ec2-52-5-1-20.compute-1.amazonaws.com:5432/dd2k69d5171eft
  `,
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
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

import { sequelize } from "../connection";
import { DataTypes } from "sequelize";

export const Id = sequelize.define("Id", {
  value: { type: DataTypes.STRING, allowNull: false },
});

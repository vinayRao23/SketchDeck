import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

export const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  profilePicture: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue:
      "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640",
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "light",
  },
});

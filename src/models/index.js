"use strict";
require("dotenv").config();

const userModel = require("./users.js");
const profileModel = require("../models/profileModel");
const listModel = require("./listModel");
const settingModel = require("./setting");
const Collection = require("../models/data-collection");

const { Sequelize, DataTypes } = require("sequelize");

const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const list = listModel(sequelize, DataTypes);
const setting = settingModel(sequelize, DataTypes);

const profile = profileModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  list: new Collection(list),
  setting: new Collection(setting),
  profile: new Collection(profile),
};

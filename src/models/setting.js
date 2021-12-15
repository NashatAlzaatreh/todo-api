"use strict";

const settings = (sequelize, DataTypes) =>
  sequelize.define("settings", {
    completeStatus: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.STRING, allowNull: false },
  });

module.exports = settings;

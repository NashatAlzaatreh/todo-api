"use strict";

const categories = (sequelize, DataTypes) =>
  sequelize.define("categories", {
    description: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
  });

module.exports = categories;

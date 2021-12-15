"use strict";

const list = (sequelize, DataTypes) =>
  sequelize.define("todoList", {
    description: { type: DataTypes.STRING, allowNull: false },
    assignee: { type: DataTypes.STRING, allowNull: false },
    difficulty: { type: DataTypes.STRING, defaultValue: "3" },
    status: { type: DataTypes.STRING, defaultValue: "Incomplete" },
    completeStatus: { type: DataTypes.STRING, defaultValue: "no" },
    number: { type: DataTypes.STRING, defaultValue: "3" },
  });

module.exports = list;

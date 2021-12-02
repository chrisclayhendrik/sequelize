const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "./msuic.sqlite",
  logging: false,
});

module.exports = { sequelize, DataTypes, Model };

const { sequelize, DataTypes, Model } = require("./db");

class Musician extends Model {}

Musician.init(
  {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Musician };

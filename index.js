const { sequelize, DataTypes, Model } = require("./db");

class Musician extends Model {}

Musician.init(
  {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

class Instrument extends Model {}

Instrument.init(
  {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Musician, Instrument };

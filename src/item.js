const { sequelize, DataTypes, Model } = require("./sequelize_index");

/**
 * Represents a Restaurant
 */
class Item extends Model {
  // add methods here
}
Item.init(
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
    logging: false,
  }
);

module.exports = {
  Item,
};

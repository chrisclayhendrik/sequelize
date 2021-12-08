const { sequelize, DataTypes, Model } = require("../sequelize_index");
const { Item } = require("./item");

/**
 * Represents a Restaurant
 */
class Menu extends Model {
  // add methods here
}
Menu.init(
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

Menu.hasMany(Item, { as: "items", foreignKey: "menu_id" });
Item.belongsTo(Menu, { foreignKey: "menu_id" });

module.exports = {
  Menu,
};

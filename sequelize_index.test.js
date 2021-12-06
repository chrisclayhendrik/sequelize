const { sequelize } = require("./sequelize_index");
const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { Item } = require("./Item");

describe("Relationships", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("restaurants have menus", async () => {
    const restaurant = await Restaurant.create({
      name: "Ronalds",
      image: "http://some.image.url",
    });
    const menu = await Menu.create({ title: "set 1" });
    await restaurant.addMenu(menu);
    const menus = await restaurant.getMenus();
    expect(menus[0].title).toBe("set 1");
  });

    test("menus have items", async () => {
    
    const menu = await Menu.create({ title: "set 1" });

    const item = await Item.create({
      title: "item 1",
      description: "item 1 description",
      price: "10.00",
    });
    await menu.addItem(item);
    const items = await menu.getItems();
    expect(items[0].title).toBe("item 1");
  });
});

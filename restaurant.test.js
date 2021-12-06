const { sequelize } = require("./sequelize_index");
const { Restaurant } = require("./Restaurant");

describe("Restaurant", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a restaurant", async () => {
    const restaurant = await Restaurant.create({
      name: "Ronalds",
      image: "http://some.image.url",
    });
    expect(restaurant.id).toBe(1);
  });
});

describe('Relationships', () => {
  beforeAll(async () => {
      await sequelize.sync({ force: true });
  })
  
  test('restaurants have menus', async () => {
      const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
      const menu = await Menu.create({title: 'set 1'});
      await restaurant.addMenu(menu);
      const menus = await restaurant.getMenus();
      expect(menus[0].title).toBe('set 1');
  })

})

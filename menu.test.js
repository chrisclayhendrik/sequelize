const { sequelize } = require("./sequelize_index");
const { Menu } = require("./Menu");

describe("Menu", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a menu", async () => {
    const menu = await Menu.create({
      name: "Dinner",
      image: "http://some.image.url",
    });
    expect(menu.id).toBe(1);
  });
});

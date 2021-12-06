const { sequelize } = require("./sequelize_index");
const { Item } = require("./Item");

describe("Item", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a menu item", async () => {
    const item = await Item.create({
      name: "Pizza",
      image: "http://some.image.url",
    });
    expect(item.id).toBe(1);
  });
});

const { sequelize } = require("./db");
const { Musician } = require("./index");

describe("Musician Database", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("can create musicians", async () => {
    const testMusician = await Musician.create({
      name: "Prince",
      instrument: "guitar",
    });
    expect(testMusician.name).toBe("Prince");
    expect(testMusician.instrument).toBe("guitar");
  });
});

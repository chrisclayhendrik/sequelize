const { sequelize } = require("./db");
const { Musician } = require("./index");
const { Instrument } = require("./index");

describe("Musician Database", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("can create musicians", async () => {
    const testMusician = await Musician.create({
      name: "Prince",
      type: "guitarist",
    });
    expect(testMusician.name).toBe("Prince");
    expect(testMusician.type).toBe("guitarist");
  });
});

describe("Instrument Database", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("can create instruments", async () => {
    const testInstrument = await Instrument.create({
      name: "guitar",
      type: "stringed",
    });
    expect(testInstrument.name).toBe("guitar");
    expect(testInstrument.type).toBe("stringed");
  });
});

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
      const testMusician2 = await Musician.create({
        name:'Kurt Cobain',
        type: 'guitarist',
    });
    expect(testMusician.name).toBe("Prince");
    expect(testMusician.type).toBe("guitarist");
    expect(testMusician2.name).toBe("Kurt Cobain");
    expect(testMusician2.type).toBe("guitarist");
  });
});

describe("Instrument Database", () => {
  test("can create instruments", async () => {
    const testInstrument = await Instrument.create({
      name: "guitar",
      type: "stringed",
    });
    const testInstrument2 = await Instrument.create({
      name: "bass_guitar",
      type: "stringed",
    });
    expect(testInstrument.name).toBe("guitar");
    expect(testInstrument.type).toBe("stringed");
    expect(testInstrument2.name).toBe("bass_guitar");
    expect(testInstrument2.type).toBe("stringed");
  });
});

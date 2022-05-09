const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE
  test("returns array", () => {
    expect(shuffleArray).not.toEqual(expect.arrayContaining(["value"]));
  });
  test("return length", () => {
    expect(shuffleArray(["value"])).toBe == shuffleArray.length;
  });
});

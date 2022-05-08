const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  // CODE HERE
  test("returns array", () => {
    expect(shuffleArray.isArray([])).toBe(true);
  });
  test("return length", () => {
    expect(shuffleArray.length([])).toBe == shuffleArray.length;
  });
});

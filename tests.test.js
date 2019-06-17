const testOne = require("./index");

test("return true so as a and b are equal", () => {
  const a = "1";
  const b = 1;
  const expected = true;
  const actual = testOne.isEqual(a, b);
  expect(actual).toEqual(expected);
});

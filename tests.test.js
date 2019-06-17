const testOne = require("./index");

test("return true so as a and b are equal", () => {
  const a = "1";
  const b = 1;
  const expected = true;
  const actual = testOne.isEqual(a, b);
  expect(actual).toEqual(expected);
});

test("return true using the strict equal operator", () => {
  const a = "1";
  const b = 1;
  const expected = true;
  const actual = testOne.isStrictlyEqual(a, b);
  expect(actual).toEqual(expected);
});

test("convert a to string  to not equal and return false", () => {
  const a = 1;
  const b = 1;
  const expected = true;
  const actual = testOne.isNotEqual(a, b);
  expect(actual).toEqual(expected);
});

test("return the numbers higher than 5", () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  const expected = [6, 7, 8];
  const actual = testOne.greaterThan(a);
  expect(actual).toEqual(expected);
});

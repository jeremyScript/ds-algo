import { findADuplicate } from "../src/findADuplicate";

test("there are duplicates of a single number", () => {
  const numbers = [5, 2, 1, 3, 4, 2];
  expect(findADuplicate(numbers)).toBe(2);
});

test("there are duplicates of multiple numbers", () => {
  const numbers = [6, 3, 1, 5, 3, 4, 6];
  expect([6, 3]).toContain(findADuplicate(numbers));
});

test("there is no duplicate of any number", () => {
  const numbers = [-3, 3, 1, 5, -5, 4, 6];
  expect(findADuplicate(numbers)).toBe(null);
});

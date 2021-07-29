import { getHighestProductOf3 } from "../src/highestProductOf3";

test("all positive integers", () => {
  const inputArr = [12, 8, 16, 17, 7, 9, 21];
  expect(getHighestProductOf3(inputArr)).toBe(5712);
});

test("All negative integers", () => {
  const inputArr = [-11, -6, -28, -32, -15, -7, -4];
  expect(getHighestProductOf3(inputArr)).toBe(-168);
});

test("Both positive and negative integers", () => {
  const inputArr = [3, 2, -5, 4, -7, 5, 8, -1, 4];
  expect(getHighestProductOf3(inputArr)).toBe(280);
});

test("The array has fewer than 3 numbers", () => {
  const inputArr = [3, 6];
  expect(() => {
    getHighestProductOf3(inputArr);
  }).toThrow();
});

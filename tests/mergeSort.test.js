import { mergeSort } from "../src/mergeSort";

test("an array of numbers with an even-numbered length", () => {
  const arr = [7, 2, 0, -3, 8, 2, 0, 7];
  expect(mergeSort(arr)).toEqual([-3, 0, 0, 2, 2, 7, 7, 8]);
});

test("an array of numbers with an odd-numbered length", () => {
  const arr = [8, 4, 9, 3, 0, -3, 5];
  expect(mergeSort(arr)).toEqual([-3, 0, 3, 4, 5, 8, 9]);
});

test("an array of two numbers", () => {
  const arr = [1, 0];
  expect(mergeSort(arr)).toEqual([0, 1]);
});

test("an array of one number", () => {
  const arr = [1];
  expect(mergeSort(arr)).toEqual([1]);
});

test("an emtpy array", () => {
  const arr = [];
  expect(mergeSort(arr)).toEqual([]);
});

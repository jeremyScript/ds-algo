import { mergeSortedArrays } from "../src/mergeSortedArrays";

test("arrays of the same length", () => {
  const arr1 = [3, 6, 6, 10, 11, 15];
  const arr2 = [1, 5, 10, 12, 14, 19];
  expect(mergeSortedArrays(arr1, arr2)).toEqual([
    1, 3, 5, 6, 6, 10, 10, 11, 12, 14, 15, 19,
  ]);
});

test("arrays of different lengths", () => {
  const arr1 = [3, 8, 10];
  const arr2 = [1, 2, 2, 3, 4, 9, 12];
  expect(mergeSortedArrays(arr1, arr2)).toEqual([
    1, 2, 2, 3, 3, 4, 8, 9, 10, 12,
  ]);
});

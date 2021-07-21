import { reverseStringInPlace } from "../src/reverseStringInPlace";

test("an empty array", () => {
  const arr = [];
  reverseStringInPlace(arr);
  expect(arr).toEqual([]);
});

test("an array with a single element", () => {
  const arr = ["a"];
  reverseStringInPlace(arr);
  expect(arr).toEqual(["a"]);
});

test("an array with an even number of elements", () => {
  const arr = [0, 1, 2, 3];
  reverseStringInPlace(arr);
  expect(arr).toEqual([3, 2, 1, 0]);
});

test("an array with an odd number of elements", () => {
  const arr = ["a", "b", "c", "d", "e"];
  reverseStringInPlace(arr);
  expect(arr).toEqual(["e", "d", "c", "b", "a"]);
});

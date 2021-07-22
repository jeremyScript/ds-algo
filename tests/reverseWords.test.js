import { reverseWords } from "../src/reverseWords";

test("an empty array", () => {
  const arr = [];
  reverseWords(arr);
  expect(arr).toEqual([]);
});

test("an array with a single element", () => {
  const arr = ["abc"];
  reverseWords(arr);
  expect(arr).toEqual(["abc"]);
});

test("an array with an odd number of words", () => {
  const arr = ["i", "t", " ", "i", "s", " ", "w", "h", "a", "t"];
  reverseWords(arr);
  expect(arr).toEqual(["w", "h", "a", "t", " ", "i", "s", " ", "i", "t"]);
});

test("an array with an even number of words", () => {
  const arr = [
    "i",
    "t",
    " ",
    "i",
    "s",
    " ",
    "t",
    "i",
    "m",
    "e",
    " ",
    "w",
    "h",
    "a",
    "t",
  ];
  reverseWords(arr);
  expect(arr).toEqual([
    "w",
    "h",
    "a",
    "t",
    " ",
    "t",
    "i",
    "m",
    "e",
    " ",
    "i",
    "s",
    " ",
    "i",
    "t",
  ]);
});

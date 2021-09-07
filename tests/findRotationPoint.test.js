import { findRotationPoint } from "../src/findRotationPoint";

test("rotation point is located somewhere in the middle", () => {
  const words = [
    "ptolemaic",
    "retrograde",
    "supplant",
    "undulate",
    "xenoepist",
    "asymptote",
    "babka",
    "banoffee",
    "engender",
    "karpatka",
    "othellolagkage",
  ];
  expect(findRotationPoint(words)).toBe(5);
});

test("rotation point is located in the very beginning", () => {
  const words = [
    "babka",
    "banoffee",
    "engender",
    "karpatka",
    "othellolagkage",
    "ptolemaic",
    "retrograde",
    "supplant",
    "undulate",
    "xenoepist",
  ];
  expect(findRotationPoint(words)).toBe(0);
});

test("rotation point is located in the very end", () => {
  const words = [
    "engender",
    "karpatka",
    "othellolagkage",
    "ptolemaic",
    "retrograde",
    "supplant",
    "undulate",
    "xenoepist",
    "asymptote",
  ];
  expect(findRotationPoint(words)).toBe(8);
});

import { sortScores } from "../src/topScores";

test("throws when scores are out of range", () => {
  const unsortedScores = [88, 73, 89, 95, 72];
  const HIGHEST_POSSIBLE_SCORE = 50;
  expect(() => {
    sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
  }).toThrow();
});

test("odd-numbered length", () => {
  const unsortedScores = [65, 72, 80, 43, 100, 72, 0];
  const HIGHEST_POSSIBLE_SCORE = 100;
  expect(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)).toEqual([
    0, 43, 65, 72, 72, 80, 100,
  ]);
});

test("even-numbered length", () => {
  const unsortedScores = [88, 73, 89, 95, 72, 68, 99, 65];
  const HIGHEST_POSSIBLE_SCORE = 100;
  expect(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)).toEqual([
    65, 68, 72, 73, 88, 89, 95, 99,
  ]);
});

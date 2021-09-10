/*
Write a function that takes:

  1) an array of unsorted scores and
  2) the highest possible score in the game

  and returns a sorted array of scores.

Example:

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]

Do this in less than O(nlog n) time.
*/

// Solution

export const sortScores = (unsortedScores, HIGHEST_POSSIBLE_SCORE) => {
  const tempArr = [];
  for (let i = 0; i < unsortedScores.length; i++) {
    const score = unsortedScores[i];
    if (score > HIGHEST_POSSIBLE_SCORE)
      throw new Error("Score outside the range");
    tempArr[score] = tempArr[score] === undefined ? 1 : tempArr[score] + 1;
  }

  const sortedArr = [];

  for (let i = 0; i < tempArr.length; i++) {
    let count = tempArr[i] || 0;
    while (count > 0) {
      sortedArr.push(i);
      count--;
    }
  }

  return sortedArr;
};

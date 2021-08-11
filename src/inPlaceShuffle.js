/*
Write a function for doing an in-place shuffle of an array. The shuffle must be
"uniform", meaning each item in the original array must have the same
probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random
integer that is >= floor and <= ceiling.
*/

// Solution
// O(n) time and O(1) space

/**
 * @name shuffleArrayInPlace
 * @param {array} arr - An array to be shuffled.
 */

export const shuffleArrayInPlace = (arr) => {
  if (arr.length <= 1) return;

  for (let i = 0; i < arr.length; i++) {
    const randomIndex = getRandomIndex(i, arr.length - 1);
    // Swap the current element with another at randomIndex
    if (i !== randomIndex)
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
};

// Helper function that returns a random index
function getRandomIndex(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

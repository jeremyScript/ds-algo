/*
Write a function that takes an array of characters and reverses the letters in
place.

Example:
  Input: ['o', 'l', 'l', 'e', 'h']
  Output: ['h', 'e', 'l', 'l', 'o']
*/

// Solution
// O(n) time and O(1) space

/**
 * @name reverseStringInPlace
 * @param {array} arr - An array of characters or numbers.
 */

export const reverseStringInPlace = (arr) => {
  const pivot = Math.floor(arr.length / 2);
  // Iterate to the pivot
  for (let i = 0; i < pivot; i++) {
    let j = arr.length - 1 - i;
    // Swap elements with destructuring assignment
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

// Alternative approach
const reverseStringInPlace2 = (arr) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    leftIndex++;
    rightIndex++;
  }
};

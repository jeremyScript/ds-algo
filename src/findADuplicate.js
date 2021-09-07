/*
There's an array of integers, where:

1. The integers are in the range 1..n.
2. The array has a length of n+1.

It follows that the array has at least one integer which appears more than once.
But it may have several duplicates, and each duplicate may appear twice or more.

Write a function which finds an integer that appears more than once in an array.
If there are multiple duplicates, you only need to find one of them.

Do not modify the input.

Optimize for space.
*/

// Solution

/**
 * @name findADuplicate
 * @param {array} numbers - An array of numbers.
 * @returns {number} A number that is repeated.
 */

export const findADuplicate = (numbers) => {
  const setOfNums = new Set();
  for (let num of numbers) {
    if (setOfNums.has(num)) return num;
    setOfNums.add(num);
  }
};

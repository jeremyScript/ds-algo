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
// O(nlog n) time and O(1) space

/**
 * @name findADuplicate
 * @param {array} numbers - An array of numbers.
 * @returns {number} A number that is repeated.
 */

export function findADuplicate(numbers) {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {
    const midpoint = Math.floor(floor + (ceiling - floor) / 2);
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint;
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;

    const distinctPossibleIntegersInLowerRange =
      lowerRangeCeiling - lowerRangeFloor + 1;

    // Count number of items in lower range
    let itemsInLowerRange = 0;
    numbers.forEach((item) => {
      // Is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      // There must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      // There must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  // Floor and ceiling have converged
  return floor;
}

// Alternative Solution
// O(n) time and O(n) space

export const findADuplicate2 = (numbers) => {
  const setOfNums = new Set();
  for (let num of numbers) {
    if (setOfNums.has(num)) return num;
    setOfNums.add(num);
  }
};

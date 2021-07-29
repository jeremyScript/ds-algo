/*
Given an array of integers, find the highest product you can get from three of
the integers.

The input will always have at least three integers.
*/

// Solution

/**
 * @name getHighestProductOf3
 * @param {array} ints - An array of integers.
 * @return {number} The highest possible product of 3 integers.
 */

export const getHighestProductOf3 = (ints) => {
  if (ints.length < 3)
    throw new Error("The input array must contain at least 3 integers");

  let highestInt = Math.max(ints[0], ints[1]);
  let lowestInt = Math.min(ints[0], ints[1]);
  let highestProductOf2 = ints[0] * ints[1];
  let lowestProductOf2 = ints[0] * ints[1];
  let highestProductOf3 = -Infinity;

  for (let i = 2; i < ints.length; i++) {
    let currInt = ints[i];

    highestProductOf3 = Math.max(
      highestProductOf2 * currInt,
      lowestProductOf2 * currInt,
      highestProductOf3
    );

    highestProductOf2 = Math.max(
      highestInt * currInt,
      lowestInt * currInt,
      highestProductOf2
    );

    lowestProductOf2 = Math.min(
      highestInt * currInt,
      lowestInt * currInt,
      lowestProductOf2
    );

    highestInt = Math.max(currInt, highestInt);
    lowestInt = Math.min(currInt, lowestInt);
  }

  return highestProductOf3;
};

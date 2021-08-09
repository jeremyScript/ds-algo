/*
Write an efficient function that takes an array of integers and returns an array
of the products calculated by multiplying every integer in the given array
except the integer at that index for every index.

For example:

  Given,
  [1, 7, 3, 4],
  the function would return
  [84, 12, 28, 21]
  by calculating
  [7 * 3 * 4, 1 * 3 * 4, ..., 1 * 7 * 3]

Do not use division in the solution.
*/

// Solution

/**
 * @name getProductsOfAllOtherNumbers
 * @param {array} numbers - An array of integers.
 * @returns {array} An array consisting of products of integers.
 */

export const getProductsOfAllOtherNumbers = (numbers) => {
  const len = numbers.length;
  if (len < 2) throw new Error("At least two integers are required");

  const result = [];
  let product;

  for (let i = 0; i < numbers.length; i++) {
    let j = i + 1;
    product = 1;

    while (j % numbers.length !== i) {
      product *= numbers[j % numbers.length];
      j++;
    }

    result.push(product);
  }

  return result;
};

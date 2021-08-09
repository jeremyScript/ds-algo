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

// Final Solution
// O(n) time and O(n) space

/**
 * @name getProductsOfAllOtherNumbers
 * @param {array} numbers - An array of integers.
 * @returns {array} An array consisting of products of integers.
 */

export const getProductsOfAllOtherNumbers = (numbers) => {
  if (numbers.length < 2) throw new Error("At least two integers required");

  const productsOfAllOtherNumbers = [];

  let productOfNumbersBeforeIndex = 1;
  let productOfNumbersAfterIndex = 1;

  for (let i = 0; i < numbers.length; i++) {
    productsOfAllOtherNumbers[i] = productOfNumbersBeforeIndex;
    productOfNumbersBeforeIndex *= numbers[i];
  }

  for (let i = numbers.length - 1; i >= 0; i--) {
    productsOfAllOtherNumbers[i] *= productOfNumbersAfterIndex;
    productOfNumbersAfterIndex *= numbers[i];
  }

  return productsOfAllOtherNumbers;
};

// Preliminary solution
// O(n^2) time and O(n) space

// const getProductsOfAllOtherNumbers = (numbers) => {
//   const len = numbers.length;
//   if (len < 2) throw new Error("At least two integers are required");

//   const result = [];
//   let product;

//   for (let i = 0; i < numbers.length; i++) {
//     let j = i + 1;
//     product = 1;

//     while (j % numbers.length !== i) {
//       product *= numbers[j % numbers.length];
//       j++;
//     }

//     result.push(product);
//   }

//   return result;
// };

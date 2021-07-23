/*
Given two arrays of numbers sorted in ascending order,
write a function to merge the arrays into one sorted array.

Example:
const array1 = [3, 4, 6, 10, 11, 15];
const array2 = [1, 5, 8, 12, 14, 19];

mergeSortedArrays(array1, array2);
// => [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

// Solution
// O(n) time and O(n) space

/**
 * @name mergeSortedArrays
 * @param {array} arr1 - A sorted array.
 * @param {array} arr2 - A sorted array.
 * @returns {array} A merged and sorted array.
 */

export const mergeSortedArrays = (arr1, arr2) => {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  // Loop through both arrays and compare elements
  // The smaller element gets pushed into mergedArr
  // while updating indices accordingly
  while (i < arr1.length || j < arr2.length) {
    // If one array runs out of elements to merge,
    // continue appending the other array's elements
    if (arr1[i] <= arr2[j] || arr2[j] === undefined) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  return mergedArr;
};

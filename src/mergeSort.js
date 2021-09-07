/*
Given an array of numbers, write a function that will sort the numbers using the
merge sort method.

Example:
const arr = [6, 2, 4, 0, -1, 4, 2];

mergeSort(arr);
// => [-1, 0, 2, 2, 4, 4, 6]
*/

// Solution

/**
 * @name mergeSort
 * @param {array} arr - An unsorted array of numbers.
 * @returns {array} A sorted array.
 */

export const mergeSort = (arr) => {
  const len = arr.length;
  if (len < 2) return arr;

  const halfLen = Math.floor(len / 2);
  const arrA = arr.slice(0, halfLen);
  const arrB = arr.slice(halfLen, len);

  const arr1 = mergeSort(arrA);
  const arr2 = mergeSort(arrB);

  const merged = [];
  let i = 0;
  let j = 0;

  while (arr1[i] !== undefined || arr2[j] !== undefined) {
    if (arr1[i] < arr2[j] || arr2[j] === undefined) merged.push(arr1[i++]);
    else merged.push(arr2[j++]);
  }

  return merged;
};

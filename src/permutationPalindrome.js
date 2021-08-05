/*
Write an efficient function that checks whether any permutation of an input
string is a palindrome.

You can assume the input string only contains lowercase
letters.

Examples:
"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
*/

// Solution

/**
 * @name hasPalindromePermutation
 * @param {string} str - A string of lowercase letters.
 * @returns {boolean} A boolean indicating whether there's a palindrome.
 */

// A string has a permutation that's a palindrome if it has no more than one unique letter
// that occurs an odd number of times
export const hasPalindromePermutation = (str) => {
  const temp = new Set();
  for (let char of str) {
    if (temp.has(char)) temp.delete(char);
    else temp.add(char);
  }
  return temp.size <= 1;
};

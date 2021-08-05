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
// O(n) time and O(n) space

/**
 * @name hasPalindromePermutation
 * @param {string} str - A string of lowercase letters.
 * @returns {boolean} A boolean indicating whether there's a palindrome.
 */

// A string has a permutation that's a palindrome if it has no more than one
// unique letter that occurs an odd number of times
export const hasPalindromePermutation = (str) => {
  // To accout for unpaired unique letters
  const unpairedCharSet = new Set();
  for (let char of str) {
    // Any letter that appears even number of times will be deleted from the set
    // leaving only the letters that appear odd number of times
    if (unpairedCharSet.has(char)) unpairedCharSet.delete(char);
    else unpairedCharSet.add(char);
  }
  return unpairedCharSet.size <= 1;
};

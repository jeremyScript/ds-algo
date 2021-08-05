import { hasPalindromePermutation } from "../src/permutationPalindrome";

test("permutation with an odd number of chars", () => {
  const str = "aabcbcd";
  expect(hasPalindromePermutation(str)).toBe(true);
});

test("permutation with an even number of chars", () => {
  const str = "abcdbea";
  expect(hasPalindromePermutation(str)).toBe(false);
});

test("an empty string is technically a palindrome", () => {
  const str = "";
  expect(hasPalindromePermutation(str)).toBe(true);
});

test("one char string is also a palindrome", () => {
  const str = "a";
  expect(hasPalindromePermutation(str)).toBe(true);
});

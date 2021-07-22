/*
Write a function reverseWords() that takes a message as an array of characters
and reverses the order of the words in place. 

const message = [
  'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'
];

reverseWords(message);

console.log(message.join(''));  // Prints: 'steal pound cake'

When writing your function, assume the message contains only letters and spaces,
and all words are separated by one space.
*/

// Solution
// O(n) time and O(1) space

/**
 * @name reverseWords
 * @param {*} array - An array of letters and spaces.
 */

export const reverseWords = (array) => {
  reverseStringInPlace(array, 0, array.length);
  // Define indices that keep track of the start and end of a word
  let start = 0;
  let end;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] === " " || i === array.length) {
      end = i;
      // Whenever the end of a word is detected, reverse the chars within it
      reverseStringInPlace(array, start, end);
      start = i + 1;
    }
  }

  // A helper function that reverses chars on the opposite ends
  function reverseStringInPlace(array, start, end) {
    let leftIndex = start;
    let rightIndex = end - 1;

    while (leftIndex < rightIndex) {
      [array[rightIndex], array[leftIndex]] = [
        array[leftIndex],
        array[rightIndex],
      ];
      leftIndex++;
      rightIndex--;
    }
  }
};

/*
Given a list of words is stored in an array in an alphabetical order (except the
start of the list is not at index 0, write a function for finding the index of
the "rotation point", which is where the list starts.

Assume the list is huge so we want efficiency here.

For example:

  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];
*/

// Solution

/**
 * @name findRotationPoint
 * @param {array} words - An array of words in a rotated, alphabetical order.
 * @reutrns {number} The index at which the list of words rotates.
 */

export const findRotationPoint = (words) => {
  let prevWord = words[0];

  for (let i = 1; i < words.length; i++) {
    let currWord = words[i];
    if (prevWord > currWord) return i;
  }

  return 0;
};

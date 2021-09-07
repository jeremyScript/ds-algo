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
// O(log n) time and O(1) space

/**
 * @name findRotationPoint
 * @param {array} words - An array of words in a rotated, alphabetical order.
 * @reutrns {number} The index at which the list of words rotates.
 */

export const findRotationPoint = (words) => {
  if (words.length === 1) return words[0];

  let startIndex = 0;
  let endIndex = words.length - 1;
  let midIndex = Math.floor((endIndex - startIndex) / 2);

  if (words[startIndex] < words[endIndex]) return 0;

  while (startIndex < endIndex) {
    if (words[midIndex] < words[midIndex - 1]) return midIndex;
    if (words[midIndex] > words[midIndex + 1]) return midIndex + 1;

    if (words[midIndex] > words[startIndex]) {
      startIndex = midIndex;
      midIndex = Math.floor((endIndex - startIndex) / 2) + midIndex;
    } else {
      endIndex = midIndex;
      midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    }
  }
};

// Alternative Solution
// O(n) time and O(1) space

export const findRotationPoint2 = (words) => {
  let prevWord = words[0];

  for (let i = 1; i < words.length; i++) {
    let currWord = words[i];
    // Check the order between the previous and current words
    if (prevWord > currWord) return i;
  }
  // If not found elsewhere, the rotation
  // point is at the beginning of the array
  return 0;
};

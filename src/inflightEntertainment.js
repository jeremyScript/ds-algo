/*
Write a function that takes an integer flightLength (in minutes) and an array of
integers movieLengths (in minutes) and returns a boolean indicating whether
there are two numbers in movieLengths whose sum equals flightLength.

When building your function:
- Assume your users will watch exactly two movies
- Don't make your users watch the same movie twice
- Optimize for runtime over memory
*/

// Solution
// O(n) time and O(n) space

/**
 * @name canTwoMoviesFillFlight
 * @param {array} movieLengths - An array of movie runtimes in minutes.
 * @param {number} flightLength - An integer for flight duration in minutes.
 * @returns {boolean} A boolean indicating whether two such films exist.
 */

export const canTwoMoviesFillFlight = (movieLengths, flightLength) => {
  // Edge case
  if (movieLengths.length < 2)
    throw new Error("There are fewer than two movies available");

  const movieSet = new Set(); // To store movie times

  for (let movieLength of movieLengths) {
    const complementaryPair = flightLength - movieLength;
    if (movieSet.has(complementaryPair)) return true;

    movieSet.add(movieLength);
  }

  return false;
};

/*
You want to build a word cloud, an infographic where the size of a word
corresponds to how often it appears in the body of text.

Write code that takes a long string and builds its word cloud data in a
Map, where the keys are words and the values are the number of times the words
occurred.

Assume the input will only contain words and standard capitalization and
punctuation. Your code should reasonably handle the same word with different
capitalization.
*/

// Solution

export const buildWordCloudData = (str) => {
  const wordMap = new Map();
  const wordArr = parseWords(str);

  // Assume a word is uppercase/lowercase only if it consistently appears in
  // that case throughout the input. If both cases appear, assume the word is
  // lowercase and update the Map accordingly.
  for (let word of wordArr) {
    let isUpperCase = word === word[0].toUpperCase() + word.slice(1);
    let theOtherCase = isUpperCase
      ? word.toLowerCase()
      : word[0].toUpperCase() + word.slice(1);

    let frequency = 0;

    if ((frequency = wordMap.get(theOtherCase))) {
      wordMap.set(isUpperCase ? theOtherCase : word, ++frequency);
      wordMap.delete(isUpperCase ? word : theOtherCase);
    } else {
      frequency = wordMap.get(word) || 0;
      wordMap.set(word, ++frequency);
    }
  }
  return wordMap;
};

// Parses each word and stores it in an array
function parseWords(str) {
  const parsedWords = [];
  let word;

  // indices for slicing words
  let wordStart = 0;
  let wordEnd;

  // boolean flags to guide when to update the indices
  let didWordStart = false;
  let didWordEnd = true;

  for (let i = 0; i < str.length; i++) {
    // If a char is a letter and didWordEnd flag is true,
    // update wordStart to i and update the flags accordingly
    if (isCharALetter(str[i])) {
      if (didWordEnd) {
        wordStart = i;
        didWordStart = true;
        didWordEnd = false;
      }
    } else {
      if (i > 0 && didWordStart) {
        // If a char is not a letter AND either:
        //   (1) the following char is also not a letter or
        //   (2) the char is a whitespace,
        // update wordEnd to i and slice the string to obtain the word
        if (!isCharALetter(str[i + 1]) || str[i] === " ") {
          wordEnd = i;
          word = str.slice(wordStart, wordEnd);
          parsedWords.push(word);
          didWordStart = false;
          didWordEnd = true;
        }
      }
    }
  }
  return parsedWords;
}

// Checks whether a char is a letter
function isCharALetter(char) {
  if (typeof char !== "string") return false;
  return char.toLowerCase() !== char.toUpperCase();
}

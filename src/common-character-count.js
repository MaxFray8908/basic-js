const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let countS1 = countChar(s1);
  let countS2 = countChar(s2);
  let result = 0;
  for (let char in countS1) {
    if (char in countS2) {
      result += countS1[char] < countS2[char] ? countS1[char] : countS2[char];
    }
  }
  return result;
}

function countChar (str) {
  let count = {};
  for (let char of str) {
    if (char in count) {
      count[char] += 1;
    }
    else {
      count[char] = 1;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

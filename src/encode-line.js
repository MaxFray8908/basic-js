const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let prevChar = '';
  let encodeStr = '';
  for (let char of str) {
    if (char === prevChar) {
      count += 1;
    }
    else {
      encodeStr += (count === 1) ? `${prevChar}` : `${count}${prevChar}`;
      count = 1;
    }
    prevChar = char
  }
  encodeStr += (count === 1) ? `${prevChar}` : `${count}${prevChar}`;
  return encodeStr;
}

module.exports = {
  encodeLine
};

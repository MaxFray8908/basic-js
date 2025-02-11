const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArray = String(n).split('');
  let maxNum = 0;

  for (let i = 0; i < numArray.length; i++) {
    let copyNumArray = numArray.slice();
    copyNumArray.splice(i, 1)
    copyNumArray = +(copyNumArray.join(''));
    
    if( copyNumArray > maxNum) {
      maxNum = copyNumArray;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};

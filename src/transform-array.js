const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error("'arr' parameter must be an instance of the Array!")}

  let transformArray = [];
  let copyArr = arr.slice();

  for (let i = 0; i < copyArr.length; i++) {

    switch(copyArr[i]) {
      case '--discard-next': 
        copyArr[i+1] = false; 
        i++; 
        break;
      case '--discard-prev': 
        if (!!copyArr[i-1]) {transformArray.pop()} 
        break;
      case '--double-next': 
        if (!!copyArr[i+1]) {transformArray.push(copyArr[i+1])} 
        break;
      case '--double-prev': 
        if (!!copyArr[i-1] || i-1 === 0) {transformArray.push(copyArr[i-1])} 
        break;
      default: transformArray.push(copyArr[i]);
    }

  }
  return transformArray;
}

module.exports = {
  transform
};

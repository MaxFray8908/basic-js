const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // length = 0;
  
  calculateDepth(/*arr*/) {
    throw new NotImplementedError('Not implemented');
  //   this.length += 1;

  //   for (let item in arr) {
  //     if (Array.isArray(item)) {
  //       calculateDepth(item);
  //     }
  //   }
  //   return this.length;
  }
}

module.exports = {
  DepthCalculator
};

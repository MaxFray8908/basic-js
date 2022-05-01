const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.separator) {
    options.separator = "+";
  }
  let arr = [];

  if (options.addition !== undefined){
  let i = 0;
  do {
    arr.push(String(options.addition));
    i++;
  } while (i < options.additionRepeatTimes)

  arr = arr.join(options.additionSeparator);
  str += arr;
  arr = [];
  }
  i = 0;
  do {
    arr.push(str);
    i++;
  } while (i < options.repeatTimes)

  arr = arr.join(options.separator);
  return arr;
}

module.exports = {
  repeater
};

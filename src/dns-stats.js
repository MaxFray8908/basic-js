const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  for (let item of domains) {
    item = item.split('.').reverse();
    
    let domainsElem = '';
    for (let elem of item) {
      domainsElem += '.' + elem;
      if (domainsElem in result) {
        result[domainsElem] += 1;
      }
      else {
        result[domainsElem] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};

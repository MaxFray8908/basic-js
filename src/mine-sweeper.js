const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  let resultMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    resultMatrix.push(matrix[i].slice());
    for (let j = 0; j < matrix[i].length; j++){
      let count = 0;

      for (let k = i - 1; k <= i + 1; k++ ) {
        for (let s = j - 1; s <= j + 1; s++) {
          if (k < 0 || s < 0 || k >= matrix.length || s >= matrix[i].length || (k === i &&  s === j)) {
            continue;
          }
          if (matrix[k][s] === true) {
            count += 1;
          }
        }
      }
      resultMatrix[i][j] = count;
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};

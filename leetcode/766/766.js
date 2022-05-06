/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
            if (rowIdx > 0 && colIdx > 0 
               && matrix[rowIdx - 1][colIdx - 1] !== matrix[rowIdx][colIdx]) {
                return false;
            }
        }
    }
    return true;
};

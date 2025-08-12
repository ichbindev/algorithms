/*
Given a 2D array (i.e., a matrix) containing only 1s 
(land) and 0s (water), count the number of islands in it.

An island is a connected set of 1s (land) and is surrounded 
by either an edge or 0s (water). Each cell is considered 
connected to other cells horizontally or vertically (not diagonally).

Constraints:
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] is '0' or '1'.
*/

class Solution {
  countIslands(matrix) {
    let totalIslands = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 1) {
          totalIslands++;
          this.removeIsland(i, j, matrix);
        }
      }
    }
    return totalIslands;
  }

  removeIsland(i, j, matrix) {
    if (matrix[i][j] === 1) {
      matrix[i][j] = 0;
      i - 1 >= 0 && this.removeIsland(i - 1, j, matrix);
      j - 1 >= 0 && this.removeIsland(i, j - 1, matrix);
      i + 1 < matrix.length && this.removeIsland(i + 1, j, matrix);
      j + 1 < matrix[0].length && this.removeIsland(i, j + 1, matrix);
    }
  }
}

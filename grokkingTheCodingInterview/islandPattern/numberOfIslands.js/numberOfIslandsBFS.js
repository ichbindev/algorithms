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

  removeIsland(x, y, matrix) {
    const queue = [ [x, y] ];
    while (queue.length) {
      const [i, j] = queue.shift();
      if (
           i < 0 // v out of bounds v
        || j < 0 
        || i >= matrix.length 
        || j >= matrix[0].length
        || !matrix[i][j] // water
          ) 
            continue;

      matrix[i][j] = 0;
      queue.push([i - 1, j]);
      queue.push([i, j - 1]);
      queue.push([i + 1, j]);
      queue.push([i, j + 1]);
    }
  }
}

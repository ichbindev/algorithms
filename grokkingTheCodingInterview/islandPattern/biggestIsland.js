/*
Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), find the biggest island in it. Write a function to return the area of the biggest island. 

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).

Constraints:
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 50
- matrix[i][j] is '0' or '1'.
*/

class Solution {
  maxAreaOfIsland(matrix) {
    let biggestIslandArea = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j< matrix[0].length; j++) {
        if (matrix[i][j] === 1) {
          const islandArea = this.visitAndCount(i, j, matrix);
          biggestIslandArea = Math.max(islandArea, biggestIslandArea);
        }
      }
    }
    return biggestIslandArea;
  }

  visitAndCount(x, y, matrix) {
    if (x < 0 || 
        y < 0 || 
        x >= matrix.length || 
        y >= matrix[0].length || 
        !matrix[x][y]
       ) 
        return 0;
    
    matrix[x][y] = 0;
    let count = 1;
    count += this.visitAndCount(x - 1, y, matrix);
    count += this.visitAndCount(x + 1, y, matrix);
    count += this.visitAndCount(x, y - 1, matrix);
    count += this.visitAndCount(x, y + 1, matrix);
    return count;
  }
}

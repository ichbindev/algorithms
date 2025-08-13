/*
You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either 
an edge or 0s (water). Each cell is considered connected to other cells 
horizontally or vertically (not diagonally).

A closed island is an island that is totally surrounded by 0s (i.e., water). 
This means all horizontally and vertically connected cells of a closed island 
are water. This also means that, by definition, a closed island can't touch 
an edge (as then the edge cells are not connected to any water cell).

Write a function to find the number of closed islands in the given matrix.

Constraints:
- 1 <= grid.length, grid[0].length <= 100
- 0 <= grid[i][j] <=1
*/

class Solution {
  countClosedIslands(matrix) {
    let closedIslands = 0;
    const visited = Array.from({ length: matrix.length }, () => Array.from( 
      { length: matrix[0].length }, () => false
    ));
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] && 
            !visited[i][j] && 
            this.isClosedIsland(matrix, visited, i, j)) {
          console.log(i, j)
          closedIslands++;
        }
      }
    }
    return closedIslands;
  }

  isClosedIsland(matrix, visited, i, j) {
    if (i < 0 || j < 0 ||
        i >= matrix.length || j >= matrix[0].length) {
      return false;
    }
    if (matrix[i][j] === 0 || visited[i][j]) return true;

    visited[i][j] = true;

    let isClosed = true;
    
    // don't use && or &&= because it short circuits!
    // need to make sure we mark the whole island as visited
    isClosed &= this.isClosedIsland(matrix, visited, i - 1, j);
    isClosed &= this.isClosedIsland(matrix, visited, i + 1, j);
    isClosed &= this.isClosedIsland(matrix, visited, i, j - 1);
    isClosed &= this.isClosedIsland(matrix, visited, i, j + 1);
    return isClosed;
  }
}

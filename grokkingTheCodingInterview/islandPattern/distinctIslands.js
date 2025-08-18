/*
You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either 
an edge or 0s (water). Each cell is considered connected to other cells 
horizontally or vertically (not diagonally).

Two islands are considered the same if and only if they can be translated 
(not rotated or reflected) to equal each other.

Write a function to find the number of distinct islands in the given matrix.
*/

class Solution {
  findDistinctIslandsDFS(matrix) {
    const islands = this.getIslands(matrix);
    return islands.size;
  }

  getIslands(matrix) {
    const islands = new Set();
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 1) {
          islands.add(this.visitNeighbors(matrix,  i, j, 'S'));
        }
      }
    }
    return islands;
  }

  visitNeighbors(matrix, x, y, direction) {
    if (x < 0 || y < 0 || x >= matrix.length || 
      y >= matrix[0].length || matrix[x][y] !== 1) 
        return '';

    matrix[x][y] = 2; // use 2 to mark visited
    let traversalString = direction;
    traversalString += this.visitNeighbors(matrix, x - 1, y, 'U');
    traversalString += this.visitNeighbors(matrix, x + 1, y, 'D');
    traversalString += this.visitNeighbors(matrix, x, y - 1, 'L');
    traversalString += this.visitNeighbors(matrix, x, y + 1, 'R');
    traversalString += 'B';
    return traversalString;
  }
}

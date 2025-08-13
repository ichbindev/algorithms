/*
You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either 
an edge or 0s (water). Each cell is considered connected to other cells 
horizontally or vertically (not diagonally).

There are no lakes on the island, so the water inside the island is not 
connected to the water around it. A cell is a square with a side length of 1.

The given matrix has only one island, write a function to find the perimeter 
of that island.
*/

class Solution {
  findIslandPerimeter(matrix) {
    const visited = Array.from({ length: matrix.length }, () => 
      Array.from({ length: matrix[0].length }, () => false
    ));
    for (const [r, row] of matrix.entries()) {
      for (const [c, v] of row.entries()) {
        if (v) return this.getPerimeter(matrix, visited, r, c);
      }
    }
    return 0;
  }

  getPerimeter(matrix, visited, x, y) {
    if (x < 0 || y < 0 ||
        x >= matrix.length || y >= matrix[0].length ||
        !matrix[x][y]) {
          return 1;
    } 
    if (visited[x][y]) return 0; 

    visited[x][y] = true;
    let perimeter = 0;
    perimeter += this.getPerimeter(matrix, visited, x - 1, y);
    perimeter += this.getPerimeter(matrix, visited, x + 1, y);
    perimeter += this.getPerimeter(matrix, visited, x, y - 1);
    perimeter += this.getPerimeter(matrix, visited, x, y + 1);
    return perimeter;
  }
}

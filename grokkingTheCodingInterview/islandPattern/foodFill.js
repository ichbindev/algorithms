/*
Any image can be represented by a 2D integer array (i.e., a matrix) 
where each cell represents the pixel value of the image.

Flood fill algorithm takes a starting cell (i.e., a pixel) and a color. 
The given color is applied to all horizontally and vertically connected 
cells with the same color as that of the starting cell. Recursively, the 
algorithm fills cells with the new color until it encounters a cell with 
a different color than the starting cell.

Given a matrix, a starting cell, and a color, flood fill the matrix.

Constraints:

- m == matrix.length
- n == - m == matrix[i].length
- 1 <= m, n <= 50
- 0 <= - m == matrix[i][j], color < 2^16
- 0 <= x < m
- 0 <= y < n
*/

class Solution {
  floodFill(matrix, x, y, newColor, originalColor = matrix[x][y]) {
    if (x < 0 || y < 0 ||
        x >= matrix.length || y >= matrix[0].length ||
        matrix[x][y] !== originalColor) {
          return;
    }

    matrix[x][y] = newColor;
    this.floodFill(matrix, x - 1, y, newColor, originalColor);
    this.floodFill(matrix, x + 1, y, newColor, originalColor);
    this.floodFill(matrix, x, y - 1, newColor, originalColor);
    this.floodFill(matrix, x, y + 1, newColor, originalColor);
    
    return matrix;
  }
}

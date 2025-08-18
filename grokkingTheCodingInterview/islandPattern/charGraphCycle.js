/*
You are given a 2D matrix containing different characters, you need to 
find if there exists any cycle consisting of the same character in the matrix.

A cycle is a path in the matrix that starts and ends at the same cell and has 
four or more cells. From a given cell, you can move to one of the cells adjacent 
to it - in one of the four directions (up, down, left, or right), if it has the 
same character value of the current cell.

Write a function to find if the matrix has a cycle.

Constraints:
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 500
- matrix[i][j] is '0' or '1'. (wrong)
*/

class Solution {
  hasCycle(matrix) {
    const visited = Array.from({ length: matrix.length }, () => 
      Array.from({ length: matrix[0].length }, () => false)
    );
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        const char = matrix[i][j];
        if (!visited[i][j] && this.findCycle(matrix, visited, char, [i, j], [-1, -1])) {
          return true;
        }
      }
    }
    return false;
  }

  findCycle(matrix, visited, char, visiting, lastVisited) {
    const [x, y] = visiting;
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length || 
      matrix[x][y] !== char) 
        return false;
    if (visited[x][y]) return true;
    visited[x][y] = true;
    const [i, j] = lastVisited;
    let hasCycle = x - 1 !== i && this.findCycle(matrix, visited, char, [x - 1, y], visiting);
    hasCycle ||= x + 1 !== i && this.findCycle(matrix, visited, char, [x + 1, y], visiting);
    hasCycle ||= y - 1 !== j && this.findCycle(matrix, visited, char, [x, y - 1], visiting);
    hasCycle ||= y + 1 !== j && this.findCycle(matrix, visited, char, [x, y + 1], visiting);
    return hasCycle;
  }
}
function removeIslands(matrix) {
  const visited = Array.from({ length: matrix.length }, () =>
    Array(matrix[0].length).fill(false)
  );
  visitEdgeIslands(matrix, visited);
  eraseUnvisited(matrix, visited);
  
  return matrix; 
}

function visitEdgeIslands(matrix, visited) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || i === matrix.length - 1 ||
          j === 0 || j === matrix[0].length - 1 &&
          !visited[i][j] && matrix[i][j]) {
        visitIsland(matrix, visited, i, j);
      } else if (j > 0 && j < matrix[0].length - 2) {
        j = matrix[0].length - 2;
      }
    }
  }
}

function visitIsland(matrix, visited, x, y) {
  if (x < 0 || y < 0 ||
      x >= matrix.length || 
      y >= matrix[0].length || 
      visited[x][y] || !matrix[x][y]) 
        return;
  visited[x][y] = true;

  visitIsland(matrix, visited, x - 1, y);
  visitIsland(matrix, visited, x + 1, y);
  visitIsland(matrix, visited, x, y - 1);
  visitIsland(matrix, visited, x, y + 1);
}

function eraseUnvisited(matrix, visited) {
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (!visited[i][j]) matrix[i][j] = 0;
    }
  }
}

// Do not edit the line below.
exports.removeIslands = removeIslands;

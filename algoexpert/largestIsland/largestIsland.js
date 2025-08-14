function largestIsland(matrix) {
  let maxIsland = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j]) continue;
      const islandSize = getIslandSize(matrix, i, j);
      maxIsland = Math.max(maxIsland, islandSize);
    }
  }
  
  return maxIsland;
}

function getIslandSize(matrix, x, y) {
  let size = 1;
  const stack = getNeighbors(matrix, x, y),
        visited = matrix.map(row => row.map(_ => false));
  
  while (stack.length) {
    const [i, j] = stack.pop();
    if (visited[i][j]) continue;
    
    visited[i][j] = true;
    size++;
    const neighbors = getNeighbors(matrix, i, j);
    stack.push(...neighbors);
  }
  
  return size;
}

function getNeighbors(matrix, x, y) {
  const neighbors = [];
  if (x > 0 && matrix[x - 1][y] !== 1) {
    neighbors.push([x - 1, y]);
  }
  if (x < matrix.length - 1 && matrix[x + 1][y] !== 1) {
    neighbors.push([x + 1, y]);
  }
  if (y > 0 && matrix[x][y - 1] !== 1) {
    neighbors.push([x, y - 1]);
  }
  if (y < matrix[0].length - 1 && matrix[x][y + 1] !== 1) {
    neighbors.push([x, y + 1]);
  }
  return neighbors;
}

// Do not edit the line below.
exports.largestIsland = largestIsland;

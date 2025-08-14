function largestIsland(matrix) {
  const islandSizes = colorAndSizeIslands(matrix);
  
  let maxIsland = 0;  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        const size = getSizeAsIfLand(matrix, islandSizes, i, j);
        maxIsland = Math.max(maxIsland, size);
      }
    }
  }
  
  return maxIsland;
}

function getSizeAsIfLand(matrix, islandSizes, x, y) {
  const neighbors = getNeighbors(matrix, x, y);
  const neighborIslands = [...new Set(neighbors.map(n => matrix[n[0]][n[1]]))];
  const neighborSizes = neighborIslands.map(n => islandSizes[n]);
  return neighborSizes.reduce((a, c) => a + c, 1);
}

function colorAndSizeIslands(matrix) {
  const islandSizes = {};
  let islandNumber = 2;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > 0) continue;
      const size = getIslandSize(matrix, islandNumber, i, j);
      islandSizes[islandNumber] = size;
      islandNumber++;
    }
  }
  return islandSizes;
}

function getIslandSize(matrix, color, x, y) {
  let size = 0;
  const stack = [ [ x, y ]];
  
  while (stack.length) {
    const [i, j] = stack.pop();
    if (matrix[i][j] !== 0 && matrix[i][j] <= color) continue;
    matrix[i][j] = color;
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

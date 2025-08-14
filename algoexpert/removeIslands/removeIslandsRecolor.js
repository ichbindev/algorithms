function removeIslands(matrix) {
  markEdgeIslands(matrix);
  recolorIslands(matrix);
  return matrix;
}

function isEdge(matrix, x, y) {
  return x === 0 ||
         y === 0 ||
         x === matrix.length - 1 ||
         y === matrix[0].length - 1;
}

function isInBounds(matrix, x, y) {
  return x >=0 &&
         y >= 0 &&
         x < matrix.length &&
         y < matrix[0].length;
}

function markEdgeIslands(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] && isEdge(matrix, i, j)) 
        markIsland(matrix, i, j);
    }
  }
}

function markIsland(matrix, x, y) {
  const queue = [ [ x, y ] ];
  while (queue.length) {
    const [i, j] = queue.shift();
    if (!isInBounds(matrix, i, j) || matrix[i][j] !== 1) 
      continue;
    matrix[i][j] = -1;
    queue.push([i - 1, j]);
    queue.push([i + 1, j]);
    queue.push([i, j - 1]);
    queue.push([i, j + 1]);
  }
}

function recolorIslands(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) matrix[i][j] = 0;
      else if (matrix[i][j] === -1) matrix[i][j] = 1;
    }
  }
}

// Do not edit the line below.
exports.removeIslands = removeIslands;

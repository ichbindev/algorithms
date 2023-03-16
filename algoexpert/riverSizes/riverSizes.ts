export function riverSizes(matrix: number[][]) {
  const visited: boolean[][] = matrix.map(row => row.map(value => false));
  const result: number[] = [];
  for (let row = 0; row < matrix.length; ++row) {
    for (let column = 0; column < matrix[row].length; ++column) {
      if (!visited[row][column]) {
        visit(row, column, matrix, visited, result);
      }
    }
  }
  return result;
}

function visit(
  row: number, 
  column: number, 
  matrix: number[][], 
  visited: boolean[][], 
  result: number[]): void {
    const stack = [[row, column]];
    let currentSize = 0;

    while (stack.length) {
      const [i, j] = stack.pop()!;
      if (visited[i][j]) continue;
      visited[i][j] = true;
      if (!matrix[i][j]) continue;
      ++currentSize;
      const unvisitedNeightbors = getUnvisitedNeighbors(i, j, matrix, visited);
      
      for (let neighbor of unvisitedNeightbors) {
        stack.push(neighbor);
      }
    }

    if (currentSize > 0) {
      result.push(currentSize);
    }
}

function getUnvisitedNeighbors(
  row: number, 
  column: number, 
  matrix: number[][], 
  visited: boolean[][]
  ): number[][] {
    const unvisited: number[][] = [];

    if (row > 0 && !visited[row - 1][column]) {
      unvisited.push([row - 1, column]);
    }
    if (column > 0 && !visited[row][column - 1]) {
      unvisited.push([row, column - 1]);
    }
    if (row < matrix.length - 1 && !visited[row + 1][column]) {
      unvisited.push([row + 1, column]);
    }
    if (column < matrix[0].length - 1 && !visited[row][column + 1]) {
      unvisited.push([row, column + 1]);
    }

    return unvisited;
  }


function sortedSquaredArray(array) {
  // Write your code here.
  return array.map(x => x * x).sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;


function fourNumberSum(array, targetSum) {
  const visitedPairs = {};
  const quadruplets = [];
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const target = targetSum - (array[i] + array[j]);
      if (visitedPairs[target]) {
        const pair = [array[i], array[j]];
        visitedPairs[target].forEach(q => quadruplets.push(q.concat(pair)));
      }
    }
    for (let k = 0; k < i; k++) {
      const sum = array[i] + array[k];
      const existing = visitedPairs[sum] || [];
      existing.push([array[i], array[k]]);
      visitedPairs[sum] = existing;
    }
  }
  return quadruplets;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;

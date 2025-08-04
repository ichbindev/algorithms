function maxPathSum(tree) {
  const tracker = new TreeTracker();
  findMaxSum(tree, tracker);
  return tracker.maxSum;
}

function findMaxSum(node, tracker) {
  if (!node) return 0;
  const { value, left, right } = node;

  const leftSum = Math.max(findMaxSum(left, tracker), 0);
  const rightSum = Math.max(findMaxSum(right, tracker), 0);

  const pathSum = value + leftSum + rightSum;
  tracker.maxSum = Math.max(tracker.maxSum, pathSum);
  
  return value + Math.max(leftSum, rightSum);
}

class TreeTracker {
  maxSum = -Infinity;
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum;

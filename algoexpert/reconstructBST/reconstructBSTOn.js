// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  // store in an array to pass by ref
  const rootInfo = { index: 0 };
  return constructSubtreeFromRange(-Infinity, 
                                   Infinity, 
                                   preOrderTraversalValues, 
                                   rootInfo);
}

function constructSubtreeFromRange(lowerBound, upperBound, values, rootInfo) {
  if (rootInfo.index === values.length) return null;
  
  const rootVal = values[rootInfo.index];
  if (rootVal < lowerBound || rootVal >= upperBound) return null;

  rootInfo.index++;
  const leftSubtree = constructSubtreeFromRange(lowerBound,
                                       rootVal,
                                       values,
                                       rootInfo);
  const rightSubtree = constructSubtreeFromRange(rootVal,
                                        upperBound,
                                        values,
                                        rootInfo);
  
  return new BST(rootVal, leftSubtree, rightSubtree);
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;

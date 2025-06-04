// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  constructor(values) {
    this.values = values;
    this.index = 0;
    this.value = this.values[this.index];
  }

  update() {
    this.index++;
    this.value = this.values[this.index];
  }
}

function reconstructBst(preOrderTraversalValues) {
  const rootInfo = new TreeInfo(preOrderTraversalValues);
  return constructSubtreeFromRange(-Infinity, 
                                   Infinity, 
                                   preOrderTraversalValues, 
                                   rootInfo);
}

function constructSubtreeFromRange(lowerBound, upperBound, values, rootInfo) {
  if (rootInfo.index === values.length) return null;
  
  const rootVal = rootInfo.value;
  if (rootVal < lowerBound || rootVal >= upperBound) return null;

  rootInfo.update();
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

// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  return placeNodes(preOrderTraversalValues);
}

function placeNodes(values) {
  if (values.length === 0) return null;
  const value = values.shift();
  const firstBiggerIndex = values.findIndex(x => x >= value);
  const splitIndex = firstBiggerIndex >= 0 ? firstBiggerIndex : values.length;
  const leftChild = placeNodes(values.slice(0, splitIndex));
  const rightChild = placeNodes(values.slice(splitIndex));
  return new BST(value, leftChild, rightChild);
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;

function minHeightBst(array) {
	return buildTree(array, 0, array.length - 1);
}

function buildTree(array, start, end) {
	if (end < start) return null;
	const index = Math.floor((start + end) / 2);
	const value = array[index];
	const tree = new BST(value);
	tree.left = buildTree(array, start, index - 1);
	tree.right = buildTree(array, index + 1, end);
	return tree;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;


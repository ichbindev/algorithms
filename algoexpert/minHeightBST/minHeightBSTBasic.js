function minHeightBst(array) {
	// tree implicitly undefined in initial call
	return buildTree(array, 0, array.length - 1);
}

function buildTree(array, start, end, tree) {
	if (end < start) return;
	const index = Math.floor((start + end) / 2);
	const value = array[index];
	if (tree) {
		tree.insert(value);
	} else {
		tree = new BST(value);
	}
	buildTree(array, start, index - 1, tree);
	buildTree(array, index + 1, end, tree);
	return tree;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;


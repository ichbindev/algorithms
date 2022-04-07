// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function binaryTreeDiameter(tree: BinaryTree): number {
	const result = trackTree(tree);
	return result.width;
}

function trackTree(tree: BinaryTree | null): TreeTracker {
	if (tree === null) {
		return new TreeTracker();
	} 
	
	const leftTree = trackTree(tree.left);
	const rightTree = trackTree(tree.right);
	
	const currentHeight = Math.max(leftTree.height, rightTree.height) + 1;
	const longestWidthUsingCurrent = leftTree.height + rightTree.height;
	const bestChildWidth = Math.max(leftTree.width, rightTree.width);
	const currentWidth = Math.max(longestWidthUsingCurrent, bestChildWidth);
	
	return new TreeTracker(currentWidth, currentHeight);
}

class TreeTracker {
	width: number;
	height: number;
	
	constructor(width: number = 0, height: number = 0) {
		this.width = width;
		this.height = height;
	}
}


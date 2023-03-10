class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  let closest = tree.value;
  let node: BST | null = tree;
  
  while (node !== null) {
    const currentDifference = Math.abs(target - closest);
    const newDifference = Math.abs(target - node.value);
    if (newDifference < currentDifference) {
      closest = node.value;
    }
  
    if (target < node.value) {
      node = node.left;
    } else if (target > node.value) {
      node = node.right;
    } else {
      break;
    }
  }
  
  return closest;
}

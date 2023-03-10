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
  return calcClosestValue(tree, target, tree.value);
}

function calcClosestValue(node: BST | null, target: number, closestValue: number): number | null {
  let closest = closestValue;
  
  if (node) {
    const currentDiff = Math.abs(target - closestValue);
    const newDiff = Math.abs(target - node.value);
    if (newDiff < currentDiff) {
      closest = node.value;
    }
    if (target > node.value) {
      return calcClosestValue(node.right, target, closest);
    } else if (target < node.value) {
      return calcClosestValue(node.left, target, closest);
    } 
  }
  
  return closest;
}



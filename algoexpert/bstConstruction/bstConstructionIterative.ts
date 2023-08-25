// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    let node: BST = this;
    while (1 === 1) {
      if (value < node.value) {
        if (!node.left) {
          node.left = new BST(value);
          break;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = new BST(value);
          break;
        }
        node = node.right;
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value: number): boolean {
    let node: BST | null = this;
    while (node) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value: number, parent: BST | null = null): BST {
    let node: BST | null = this;
    while (node) {
      // find the node
      if (value < node.value) {
        parent = node;
        node = node.left;
      } else if (value > node.value) {
        parent = node;
        node = node.right;
      } else {
      // node found, remove the node
        if (node.left && node.right) { // two children
          let seeker: BST = node.right;
          while (seeker.left) {
              seeker = seeker.left;
          }
          node.value = seeker.value;
          node.right.remove(seeker.value, node);
        } else if (!parent) { // one child, no parent
          if (node.left) {
            node.value = node.left.value;
            node.right = node.left.right;
            node.left = node.left.left;
          } else if (node.right) {
            node.value = node.right.value;
            node.left = node.right.left;
            node.right = node.right.right;
          }
        } else if (node === parent.left) { // one child and is left child
          if (node.left) {
            parent.left = node.left;
          } else {
            parent.left = node.right;
          }
        } else if (node === parent.right) { // one child and is right child
          if (node.left) {
            parent.right = node.left;
          } else {
            parent.right = node.right;
          }
        }
        // not advancing node so need to get out, we done
        break;
      }

    }
    // Do not edit the return statement of this method.
    return this;
  }
}

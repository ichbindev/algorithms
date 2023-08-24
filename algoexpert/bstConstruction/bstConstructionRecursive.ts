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
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value: number): boolean {
    if (value < this.value) {
      return !!(this.left) && this.left.contains(value);
    } else if (value > this.value) {
      return !!(this.right) && this.right.contains(value);
    } 
    return true;
  }

  remove(value: number, parent: BST | null = null): BST {
    if (value < this.value) {
      if (this.left) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.remove(value, this)
      }
    } else  {
      if (this.left !== null && this.right !== null) {
       let seeker: BST = this.right;
        while (seeker.left || seeker.right) {
          if (seeker.left) {
            seeker = seeker.left;
          } else if (seeker.right) {
            seeker = seeker.right;
          }
        }
        this.value = seeker.value;
        this.right.remove(seeker.value, this)
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {}
      } else if (this === parent.left) {
        if (this.left) {
          parent.left = this.left;
        } else {
          parent.left = this.right;
        }
      } else if (this === parent.right) {
        if (this.left) {
          parent.right = this.left;
        } else {
          parent.right = this.right;
        }
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }
}

// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
class UnionFind {
  constructor() {
    this.parents = new Map();
    this.ranks = new Map();
  }

  createSet(value) {
    this.parents.set(value, value);
    this.ranks.set(value, 0);
  }

  find(value) {
    let parent = this.parents.get(value);
    if (parent === undefined) return null;

    // update parents recursively to improve performance
    if (value !== parent) {
      parent = this.find(parent);
      this.parents.set(value, parent);
    }
    
    return parent;
  }

  union(valueOne, valueTwo) {
    const representativeOne = this.find(valueOne);
    const representativeTwo = this.find(valueTwo);
    if (representativeOne === null || 
        representativeTwo === null) return;
    
    const rankOne = this.ranks.get(representativeOne);
    const rankTwo = this.ranks.get(representativeTwo);
    if (rankOne <= rankTwo) {
      this.parents.set(representativeOne, representativeTwo);
    } else {
      this.parents.set(representativeTwo, representativeOne);
    }
    if (rankOne === rankTwo) {
      this.ranks.set(representativeTwo, rankTwo + 1);
    }
  }
}

// Do not edit the line below.
exports.UnionFind = UnionFind;

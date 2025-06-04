function sameBsts(arrayOne, arrayTwo) {
  const treeOne = new TreeInfo(arrayOne);
  const treeTwo = new TreeInfo(arrayTwo);
  return checkSameBst(treeOne, treeTwo);
}

function checkSameBst(treeOne, treeTwo) {
  if (treeOne.index === -1 || treeTwo.index === -1)
    return treeOne.index === treeTwo.index;

  if (treeOne.value !== treeTwo.value) return false;

  const { value, min, max } = treeOne;

  const treeOneLeft = new TreeInfo(
    treeOne.values,
    treeOne.nextLeft,
    min,
    value
  );
  const treeTwoLeft = new TreeInfo(
    treeTwo.values,
    treeTwo.nextLeft,
    min,
    value
  );
  const leftSameBst = checkSameBst(treeOneLeft, treeTwoLeft);

  const treeOneRight = new TreeInfo(
    treeOne.values,
    treeOne.nextRight,
    value,
    max
  );
  const treeTwoRight = new TreeInfo(
    treeTwo.values,
    treeTwo.nextRight,
    value,
    max
  );
  const rightSameBst = checkSameBst(treeOneRight, treeTwoRight);

  return leftSameBst && rightSameBst;
}

class TreeInfo {
  constructor(values, index = 0, min = -Infinity, max = Infinity) {
    this.values = values;
    this.index = index;
    this.value = values[index];
    this.min = min;
    this.max = max;
    this.nextLeft = this.findNextLeft();
    this.nextRight = this.findNextRight();
  }

  findNextLeft() {
    for (let i = this.index + 1; i < this.values.length; i++) {
      if (this.values[i] < this.value && this.values[i] >= this.min) {
        return i;
      }
    }
    return -1;
  }

  findNextRight() {
    for (let i = this.index + 1; i < this.values.length; i++) {
      if (this.values[i] >= this.value && this.values[i] < this.max) {
        return i;
      }
    }
    return -1;
  }
}

// Do not edit the line below.
exports.sameBsts = sameBsts;

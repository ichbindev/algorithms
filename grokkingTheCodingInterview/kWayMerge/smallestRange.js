/*
Given ‘M’ sorted arrays, find the smallest range that includes at least 
one number from each of the ‘M’ lists.

This solves for 'smallest' being the smallest duration, not the start/end closest to 0.
*/

class Element {
  constructor(val, listNum, idx) {
    this.val = val;
    this.listNum = listNum;
    this.idx = idx;
  }
}

class Solution {
  findSmallestRange(lists) {
    const heap = new Heap((a, b) => a.val - b.val),
          window = new Heap((a, b) => a.val - b.val),
          inWindow = {};
          
    for (const [listNum, list] of lists.entries()) {
      heap.push(new Element(list[0], listNum, 0));
    }

    let bestRange = [-Infinity, Infinity];
    while (heap.size()) {
      // grow window
      const end = heap.pop();
      window.push(end);
      inWindow[end.listNum] = inWindow[end.listNum] + 1 || 1;
      const start = window.peek();

      // grow heap
      const { listNum, idx } = end;
      if (idx + 1 < lists[listNum].length) {
        heap.push(new Element(lists[listNum][idx + 1], listNum, idx + 1));
      }

      while (window.size() && Object.keys(inWindow).length === lists.length) {
        // check
        const { val: sVal } = start,
              { val: eVal } = end;
        if (!bestRange || (bestRange[1] - bestRange[0]) > eVal - sVal) {
          bestRange = [sVal, eVal];
        }

        // shrink
        const { listNum } = window.pop();
        window[listNum]--;
        if (window[listNum] === 0) delete window.listNum;
      }
    }

    return bestRange;
  }
}

class Heap {
  constructor(comparator, fromArray = []) {
    Object.getOwnPropertyNames(Heap.prototype).forEach((key) => {
      if (key !== "constructor") {
        this[key] = this[key].bind(this);
      }
    });

    if (!comparator) comparator = (a, b) => a - b;

    this.comparator = comparator;
    this.heap = this.buildHeap(fromArray);
  }

  buildHeap(array) {
    let lastParentIdx = this.calculateParent(array.length - 1);
    for (let i = lastParentIdx; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  calculateChildren(i, arr) {
    const childOne = i * 2 + 1;
    const pChildTwo = i * 2 + 2;
    const childTwo = pChildTwo < arr.length ? pChildTwo : -1;
    return [childOne, childTwo];
  }

  calculateParent(i) {
    return Math.floor((i - 1) / 2);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(value) {
    const { heap, siftUp } = this;
    heap.push(value);
    siftUp(heap.length - 1);
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  pop() {
    const { heap, siftDown, swap } = this;
    swap(0, heap.length - 1);
    const smallest = heap.pop();
    siftDown(0);
    return smallest;
  }

  remove(item) {
    const index = this.heap.indexOf(item);
    if (index === -1) {
      return false;
    }
    this.heap[index] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.siftDown(index);
    return true;
  }

  siftDown(i, arr = this.heap) {
    const { calculateChildren, comparator, swap } = this;
    let [childOne, childTwo] = calculateChildren(i, arr);
    while (childOne < arr.length) {
      // find smaller child to check swap
      let swapIdx;
      if (childTwo === -1 || comparator(arr[childOne], arr[childTwo]) < 0) {
        swapIdx = childOne;
      } else {
        swapIdx = childTwo;
      }

      // only swap if value is smaller than current index
      if (comparator(arr[swapIdx], arr[i]) > 0) {
        break;
      }
      swap(i, swapIdx, arr);
      i = swapIdx;
      [childOne, childTwo] = calculateChildren(i, arr);
    }
  }

  siftUp(i) {
    const { calculateParent, comparator, heap, swap } = this;
    let parent = calculateParent(i);
    while (i > 0 && comparator(heap[i], heap[parent]) < 0) {
      swap(i, parent, heap);
      i = parent;
      parent = calculateParent(i);
    }
  }

  swap(i, j, arr = this.heap) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  toArray() {
    return [...this.heap];
  }
}
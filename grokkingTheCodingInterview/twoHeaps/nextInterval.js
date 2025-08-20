/*
Given an array of intervals, find the next interval of each interval. 
In a list of intervals, for an interval ‘i’ its next interval ‘j’ will 
have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.

Write a function to return an array containing indices of the next interval 
of each input interval. If there is no next interval of a given interval, 
return -1. It is given that none of the intervals have the same start point.

Constraints:
- 1 <= intervals.length <= 2 * 10^4
- intervals[i].length == 2
- -10^6 <= starti <= endi <= 10^6
- The start point of each interval is unique.
*

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}*/

class Solution {
  findNextInterval(intervals) {
    const result = intervals.map(() => -1);
    intervals = intervals.map((interval, index) => {
      return {
        index,
        ...interval
      };
    });
    
    const minStartHeap = new Heap((a, b) => a.start - b.start, intervals);
    const minEndHeap = new Heap((a, b) => a.end - b.end, intervals);

    while (minStartHeap.size()) {
      const currentInterval = minEndHeap.pop();
      while (minStartHeap.peek()?.start < currentInterval.end) minStartHeap.pop();
      const nextInterval = minStartHeap.peek();
      result[currentInterval.index] = nextInterval?.index || -1;
    }
    return result;
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
}

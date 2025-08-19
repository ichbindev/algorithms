/*
Design a class to calculate the median of a stream of numbers. The class should 
have the following two methods:

insertNum(int num): stores the number in the class
findMedian(): returns the median of all numbers inserted in the class
If the count of numbers inserted in the class is even, the median will be the 
average of the two middle numbers.

Constraints:
- -10^5 <= num <= 10^5
- There will be at least one element in the data structure before calling findMedian.
- At most 5 * 10^4 calls will be made to insertNum and findMedian.
*/

class Solution {
  constructor() {
    this.minHeap = new Heap();
    this.maxHeap = new Heap((a, b) => b - a);
  }

  insertNum(num) {
    if (num >= this.minHeap.peek()) {
      this.minHeap.push(num);
    } else {
      this.maxHeap.push(num);
    }
    this.balanceHeaps();
  }

  findMedian() {
    const minPeek = this.minHeap.peek();
    const maxPeek = this.maxHeap.peek();
    if (this.minHeap.size() === this.maxHeap.size()) {
      return (minPeek + maxPeek) / 2;
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      return minPeek;
    }
    return maxPeek;
  }

  balanceHeaps() {
    const minSize = this.minHeap.size();
    const maxSize = this.maxHeap.size();
    if (minSize > maxSize + 1) {
      this.maxHeap.push(this.minHeap.pop());
    } else if (maxSize > minSize + 1) {
      this.minHeap.push(this.maxHeap.pop());
    }
  }
}

class Heap {
  constructor(comparator, fromArray = []) {
    Object.getOwnPropertyNames(Heap.prototype).forEach((key) => {
      if (key !== 'constructor') {
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
    const childOne = (i * 2) + 1;
    const pChildTwo = (i * 2) + 2;
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
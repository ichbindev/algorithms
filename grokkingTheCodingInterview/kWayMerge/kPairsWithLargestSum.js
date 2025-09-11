/*
Given two sorted arrays in descending order, find ‘K’ pairs with the largest 
sum where each pair consists of numbers from both the arrays.

Constraints:
- 1 <= nums1.length, nums2.length <= 10^5
- -10^9 <= nums1[i], nums2[i] <= 10^9
- nums1 and nums2 both are sorted in decreasing order.
- 1 <= k <= 10^4
- k <= nums1.length * nums2.length
*/

class Pair {
  constructor(num1, num2, idx1, idx2) {
    this.pair = [num1, num2];
    this.idx1 = idx1;
    this.idx2 = idx2;
    this.sum = num1 + num2;
  }
}

class Solution {
  findKLargestPairs(nums1, nums2, k) {
    const maxHeap = new Heap((a, b) => b.sum - a.sum),
          largestPairs = [];
    maxHeap.push(new Pair(nums1[0], nums2[0], 0, 0));
    while (largestPairs.length < k) {
      const { pair, idx1, idx2 } = maxHeap.pop();
      largestPairs.push(pair);
      if (idx1 + 1 < nums1.length) {
        maxHeap.push(new Pair(nums1[idx1 + 1], nums2[idx2], idx1 + 1, idx2));
      }
      if (idx2 + 1 < nums2.length) {
        maxHeap.push(new Pair(nums1[idx1], nums2[idx2 + 1], idx1, idx2 + 1));
      }
    }
    return largestPairs;
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

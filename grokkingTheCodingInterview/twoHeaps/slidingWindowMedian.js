/*
Given an array of numbers and a number ‘k’, find the median of all the 
‘k’ sized sub-arrays (or windows) of the array.

Constraints:
- 1 <= k <= nums.length <= 10^5
- -2^31 <= nums[i] <= 2^31 - 1
*/

class Solution {
  findSlidingWindowMedian(nums, k) {
    const result = Array(nums.length - k + 1).fill(0.0),
          minHeap = new Heap(),
          maxHeap = new Heap((a, b) => b - a);
    let start = 0;
    for (let end = 0; end < nums.length; end++) {
      this.insert(nums[end], minHeap, maxHeap);
      if (end - start + 1 === k) {
        result[start] = this.getMedian(minHeap, maxHeap);
        this.remove(nums[start], minHeap, maxHeap);
        start++;
      }
    }
    return result;
  }

  insert(num, minHeap, maxHeap) {
    if (!maxHeap.size() || num <= maxHeap.peek()) {
      maxHeap.push(num);
    } else {
      minHeap.push(num);
    }
    this.balanceHeaps(minHeap, maxHeap);
  }

  getMedian(minHeap, maxHeap) {
    if (minHeap.size() === maxHeap.size()) {
      return (minHeap.peek() + maxHeap.peek()) / 2;
    }
    return maxHeap.peek();
  }

  remove(num, minHeap, maxHeap) {
    if (num >= minHeap.peek()) {
      minHeap.remove(num);
    } else {
      maxHeap.remove(num);
    }
    this.balanceHeaps(minHeap, maxHeap);
  }

  balanceHeaps(minHeap, maxHeap) {
    if (maxHeap.size() > minHeap.size() + 1) {
      minHeap.push(maxHeap.pop());
    } else if (minHeap.size() > maxHeap.size()) {
      maxHeap.push(minHeap.pop());
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

  remove(item) {
    const index = this.heap.indexOf(item);
    if (index === -1) return false;
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

  toString() {
    return this.heap.toString();
  }
}

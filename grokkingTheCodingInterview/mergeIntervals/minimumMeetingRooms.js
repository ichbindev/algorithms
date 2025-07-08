/*
Given a list of intervals representing the start and end 
time of ‘N’ meetings, find the minimum number of rooms 
required to hold all the meetings.
*/

/*class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}*/

class Solution {

  findMinimumMeetingRooms(meetings) {
    let minRooms = 0;
    const heap = new MinHeap();
    meetings.sort((a, b) => a.start - b.start);

    for (let i = 0; i < meetings.length; i++) {
      let { start, end } = meetings[i];
      while (heap.size() > 0 && heap.peek() <= start) {
        heap.remove();
      }
      heap.insert(end);
      minRooms = Math.max(minRooms, heap.size());
    }
    
    return minRooms;
  }
}

class MinHeap {
  constructor(array = []) {
    Object.getOwnPropertyNames(MinHeap.prototype).forEach((key) => {
      if (key !== 'constructor') {
        this[key] = this[key].bind(this);
      }
    });
    this.heap = this.buildHeap(array);
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

  insert(value) {
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

  remove() {
    const { heap, siftDown, swap } = this;
    swap(0, heap.length - 1);
    const smallest = heap.pop();
    siftDown(0);
    return smallest;
  }

  siftDown(i, arr = this.heap) {
    const { calculateChildren, swap } = this;
    let [childOne, childTwo] = calculateChildren(i, arr);
    while (childOne < arr.length) {
      // find smaller child to check swap
      let swapIdx;
      if (childTwo === -1 || arr[childOne] < arr[childTwo]) {
        swapIdx = childOne;
      } else {
        swapIdx = childTwo;
      }

      // only swap if value is smaller than current index
      if (arr[swapIdx] > arr[i]) {
        break;        
      }
      swap(i, swapIdx, arr);
      i = swapIdx;
      [childOne, childTwo] = calculateChildren(i, arr);
    }
  }

  siftUp(i) {
    const { calculateParent, heap, swap } = this;
    let parent = calculateParent(i);
    while (i > 0 && heap[i] < heap[parent]) {
      swap(i, parent, heap);
      i = parent;
      parent = calculateParent(i);
    }
  }

  swap(i, j, arr = this.heap) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

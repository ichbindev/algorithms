// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class ContinuousMedianHandler {
  balance() {
    while (this.minHeap.size() <= this.maxHeap.size()) {
      this.minHeap.push((this.maxHeap.pop()));
    }
    while (this.maxHeap.size() < this.minHeap.size()) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  calcMedian() {
    if (this.minHeap.size() === this.maxHeap.size()) {
      this.median = (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else {
      this.median = this.maxHeap.peek();
    }

  }
  
  constructor() {
    this.minHeap = new Heap();
    this.maxHeap = new Heap((a, b) => b - a);
    this.median = null;
  }

  insert(number) {
    if (number <= this.minHeap.peek()) {
      this.maxHeap.push(number);
    } else {
      this.minHeap.push(number);
    }
    this.balance();
    this.calcMedian();
  }

  getMedian() {
    return this.median;
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


// Do not edit the line below.
exports.ContinuousMedianHandler = ContinuousMedianHandler;

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.

class MinHeap {
  constructor(array = [], comparator) {
    Object.getOwnPropertyNames(MinHeap.prototype).forEach((key) => {
      if (key !== 'constructor') {
        this[key] = this[key].bind(this);
      }
    });
    
    if (!comparator) comparator = (a, b) => a - b;
      
    this.comparator = comparator;
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

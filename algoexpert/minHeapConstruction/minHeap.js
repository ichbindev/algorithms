// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
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

  peek() {
    return this.heap[0];
  }

  remove() {
    const { heap } = this;
    this.swap(0, heap.length - 1);
    const smallest = heap.pop();
    this.siftDown(0);
    return smallest;
  }

  insert(value) {
    const { heap } = this;
    heap.push(value);
    this.siftUp(heap.length - 1);
  }

  swap(i, j, arr = this.heap) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;

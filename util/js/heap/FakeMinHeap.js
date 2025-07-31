// for interviews, quick and easy structure to mimic a min heap
// much less efficient, but JS doesn't have a built in one and can be 
// implemented in two minutes without much thought
class FakeMinHeap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator || ((a, b) => a - b);
    this.push.bind(this);
    this.peek.bind(this);
    this.pop.bind(this);
    this.size.bind(this);
  }

  push(x) {
    const { comparator, heap } = this;
    heap.push(x);
    heap.sort(comparator)
  }

  peek() {
    return this.heap[0];
  }

  pop() {
    return this.heap.shift();
  }

  size() {
    return this.heap.length;
  }
}
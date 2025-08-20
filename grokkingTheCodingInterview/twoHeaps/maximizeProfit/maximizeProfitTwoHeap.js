/*
Given a set of investment projects with their respective profits, we 
need to find the most profitable projects. We are given an initial 
capital and are allowed to invest only in a fixed number of projects. 
Our goal is to choose projects that give us the maximum profit. Write a 
function that returns the maximum total capital after selecting the most 
profitable projects.

We can start an investment project only when we have the required capital. 
After selecting a project, we can assume that its profit has become our 
capital, and that we have also received our capital back.

Constraints:
- 1 <= numberOfprojects <= 10^5
- 0 <= initialCapital <= 10^9
- n == profits.length
- n == capital.length
- 1 <= n <= 10^5
- 0 <= profits[i] <= 10^4
- 0 <= capital[i] <= 10^9
*/

class Solution {
  findMaximumCapital(capital, profits, numberOfProjects, initialCapital) {
    const minCapHeap = new Heap((a, b) => a.cost - b.cost, 
      capital.map((c, i) => ({ 'cost': c, 'project': i })));
    const maxProfitHeap = new Heap((a, b) => b - a); 
    let totalCapital = initialCapital;
    while (numberOfProjects--) {
      while (minCapHeap.peek()?.cost <= totalCapital) {
        const { project } = minCapHeap.pop();
        maxProfitHeap.push(profits[project]);
      }
      if (!maxProfitHeap.size()) break;
      totalCapital += maxProfitHeap.pop();
    }
    return totalCapital;
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

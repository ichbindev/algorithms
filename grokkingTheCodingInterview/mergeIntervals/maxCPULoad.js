/*
We are given a list of Jobs. Each job has a Start time, 
an End time, and a CPU load when it is running. Our goal 
is to find the maximum CPU load at any time if all the 
jobs are running on the same machine.
*/

/*class Job {
  constructor(start, end, cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}*/
class Solution {
  findMaxCPULoad(jobs) {
    let maxCPULoad = 0,
        cpuLoad = 0,
        heap = new MinHeap((a, b) => a.end - b.end);
    jobs.sort((a, b) => a.start - b.start);
    for (const job of jobs) {
      while (heap.size() > 0 && heap.peek().end < job.start) {
        const previousJob = heap.remove();
        cpuLoad -= previousJob.cpuLoad;
      }
      cpuLoad += job.cpuLoad;
      heap.insert(job);
      maxCPULoad = Math.max(cpuLoad, maxCPULoad);
    }
    
    return maxCPULoad;
  }
}

class MinHeap {
  constructor(comparator, array = []) {
    Object.getOwnPropertyNames(MinHeap.prototype).forEach((key) => {
      if (key !== 'constructor') {
        this[key] = this[key].bind(this);
      }
    });
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

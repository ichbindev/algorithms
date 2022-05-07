// Exercise
// Create a stack that returns the minimum element
// in constant time
class Stack {
  constructor(stack = []) {
    this.stack = stack;
    this.resetMin();
  }

  // push remains amortized O(1)
  push(e) {
    this.min = Math.min(this.min, e);
    this.stack.push(e);
    return e;
  }

  // pop is average case O(1), worst case O(n) 
  // when min is popped
  pop() {
    const popped = this.stack.pop();
    if (popped === this.min) this.resetMin();
    return popped;
  }

  // remains O(1)
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1), like the requirement
  getMin() {
    return this.min;
  }

  // O(n) helper method for pop
  resetMin() {
    let newMin = Number.MAX_VALUE;
    this.stack.forEach(num => newMin = Math.min(newMin, num));
    this.min = newMin;
  }
}

const stack = new Stack([5, 4, 3, 2, 1]);
// [5, 4, 3, 2, 1] 
console.log(stack.getMin()); // 1
stack.pop(); 
console.log(stack.getMin()); // 2
stack.push(-5);
stack.push(-7);
// [5, 4, 3, 2, -5, -7] 
console.log(stack.getMin()); // -7
stack.pop();
// [5, 4, 3, 2, -5]
console.log(stack.getMin()); // -5

const stack2 = new Stack();
for (let n of [5, 4, 3]) {
  stack2.push(n);  
}
// [5, 4, 3]
console.log(stack2.getMin()); // 3
stack2.pop();
// [5, 4]
console.log(stack2.getMin()); // 4

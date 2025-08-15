// Feel free to add new properties and methods to the class.
class MinMaxStack {
  stack = [];
  min = null;
  max = null;
  
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    const popped = this.stack.pop();
    if (popped === this.min) this.calcMin();
    if (popped === this.max) this.calcMax();
    return popped;
  }

  push(number) {
    if (this.min === null || number < this.min) this.min = number;
    if (this.max === null || number > this.max) this.max = number;
    this.stack.push(number);
  }

  calcMin() {
    if (!this.stack.length) this.min = null;
    else this.min = Math.min(...this.stack);
  }

  calcMax() {
    if (!this.stack.length) this.max = null;
    else this.max = Math.max(...this.stack);
  }

  getMin() {
    return this.min;
  }

  getMax() {
    return this.max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;

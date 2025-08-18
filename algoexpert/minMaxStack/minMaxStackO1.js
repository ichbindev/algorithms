// Feel free to add new properties and methods to the class.
class MinMaxStack {
  stack = [];  
  mmStack = [];
  
  peek() {
    return this.stack[this.stack.length - 1];
  }

  mmPeek() {
    return this.mmStack[this.mmStack.length - 1];
  }

  pop() {
    this.mmStack.pop();
    return this.stack.pop();
  }

  push(number) {
    const newMM = {
      min: number,
      max: number
    };
    if (this.stack.length) {
      newMM.min = Math.min(this.getMin(), number);
      newMM.max = Math.max(this.getMax(), number);
    }
    
    this.mmStack.push(newMM);
    this.stack.push(number);
  }

  getMin() {
    return this.mmPeek()?.min;
  }

  getMax() {
    return this.mmPeek()?.max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;

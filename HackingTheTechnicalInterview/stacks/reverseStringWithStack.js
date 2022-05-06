// Exercise
// Reverse a string using a Stack
class Stack {
  constructor() {
    this.stack = [];
  }

  push(e) {
    this.stack.push(e);
    return e;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}


const reverseString = (s) => {
  const stack = new Stack();
  for (let c of s) {
    stack.push(c);
  }

  let result = '';

  while (stack.peek()) {
    result += stack.pop();
  }

  return result;
}

console.log(reverseString('abcde'));
console.log(reverseString('bananas'));

// Exercise
// Reverse a string using a Stack
class Stack {
  // constructor takes an iterable item and converts 
  // to stack as if pushed from beginning to end
  // default constructor is empty stack
  constructor(stack = []) {
    this.stack = Array.from(stack);
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

  empty() {
    return !this.stack.length;
  }
}


const reverse = (s) => {
  const stack = new Stack(s);
  let result = '';

  while (!stack.empty()) {
    result += stack.pop();
  }

  return result;
}

const reverse2 = (s) => {
  const stack = new Stack();
  for (let c of s) {
    stack.push(c);
  }

  let result = '';

  while (!stack.empty()) {
    result += stack.pop();
  }

  return result;
}

console.log(reverse('abcde'));
console.log(reverse('bananas'));
console.log(reverse2('abcde'));
console.log(reverse2('bananas'));
function nextGreaterElement(array) {
  const result = new Array(array.length).fill(-1),
        stack = [];

  stack.peek = function() { return this[this.length - 1]; };
  
  for (let i = 2 * array.length - 1; i >= 0; i--) {
    const idx = i % array.length;
    while (stack.length && stack.peek() <= array[idx]) {
      stack.pop();
    }
    if (stack.length) result[idx] = stack.peek();
    stack.push(array[idx]);
  }

  return result;
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;

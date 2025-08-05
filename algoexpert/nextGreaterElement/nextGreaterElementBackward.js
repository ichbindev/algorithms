function nextGreaterElement(array) {
  const result = new Array(array.length).fill(-1),
        stack = [];
  
  for (let i = 2 * array.length - 1; i >= 0; i--) {
    const idx = i % array.length;
    while (stack.length && stack[stack.length - 1] <= array[idx]) {
      stack.pop();
    }
    if (stack.length) result[idx] = stack[stack.length - 1];
    stack.push(array[idx]);
  }

  return result;
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;

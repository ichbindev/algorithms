function nextGreaterElement(array) {
  const result = new Array(array.length).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * array.length; i++) {
    const index = i % array.length;
    const num = array[index];
    while (array[stack[stack.length - 1]] < num) {
      const topIdx = stack.pop();
      result[topIdx] = num;
    }
    stack.push(index);
  }
  return result;
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;

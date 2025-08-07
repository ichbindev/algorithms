function bestDigits(number, numDigits) {
  // monotonic increasing stack
  const stack = [];
  stack.peek = function() { return this[this.length - 1]; };
  
  for (const n of number) {
    while (numDigits && stack.length && stack.peek() < n) {
      stack.pop();
      numDigits--;
    }
    stack.push(n);
  }
  
  while (numDigits--) stack.pop(); 
  
  return stack.join('');
}

// Do not edit the line below.
exports.bestDigits = bestDigits;

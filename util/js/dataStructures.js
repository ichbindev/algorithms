///////////////////////////
// ARRAY
//////////////////////////
let array = [];
array.push(); // append to end O(1)
array.pop(); // remove from end O(1)
array.shift(); // remove from beginning O(n) (O(1) impl firefox)
array.unshift(); // insert at beginning O(n)

array.map((element, index, array) => element - 1, thisArg); // [1, 2, 3] => [0, 1, 2]
  // returns array of result of map call on every element
array.reduce((accumulator, currentValue, index, array) => a + c, initialValue); // [1, 2, 3] => [1, 3, 6]
  // accumulator is result of previous call 
  // currentValue is array[0] if initialValue is present, array[1] otherwise
  // returns single value, accumulator, after call on last element of array
array.forEach((element, index, array) => {}, thisArg); 
array.indexOf(searchElement, fromIndex); // index of element that === searchElement, -1 otherwise
array.find((element, index, array) => element === 2, thisArg); // [1, 2, 2] => 2, [1, 1, 1] => undefined
  // returns first element that returns true for call, undefined otherwise
array.findLast((element, index, array) => element === 2, thisArg); // [1, 2, 2] => 2, [1, 1, 1] => undefined
  // returns last element that returns true for call, undefined otherwise
array.findIndex((element, index, array) => element === 2, thisArg); // [2, 2, 2] => 0, [1, 1, 1] => -1
  // returns first index that returns true for call, -1 otherwise
array.findLastIndex((element, index, array) => element === 2, thisArg); // [2, 2, 2] => 2, [1, 1, 1] => -1
  // returns last index that returns true for call, -1 otherwise
array.filter((element, index, array) => element % 2 === 0, thisArg); // [1, 2, 3, 4] => [2, 4], [1, 3] => []
  // returns shallow copy of array elements that past the test, empty array if none
array.some((element, index, array) => element % 2 === 0); // [1, 2, 3] => true, [1, 3, 5] => false
  // returns true if an element passes function test, false otherwise
array.every((element, index, array) => element % 2 === 0); // [1, 2, 3] => false, [2, 4, 6] => true
  // returns true if every element passes function test, false otherwise
array.slice(start, end); // basically substring for array, returns shallow copy
array.reverse(); // reverses in place
array.toReversed(); // returns a shallow copy of reversed array
array.splice(start, deleteCount, item1, item2, /* ..., */ itemN); 
  // replaces deleteCount items at index start with N (itemN) items
  array.splice(1, 0, item1); // inserts item1 at index 1
  array.splice(4, 1, item2); // replaces 1 element at index 4
array.toSpliced(start, deleteCount, item1, item2, /* ..., */ itemN); // returns shallow copy of spliced array

///////////////////////////
// QUEUE
//////////////////////////
let queue = [];
queue.push(); // enqueue O(1)
  _queue_.enqueue = function(x) { return this.push(x); };
queue.shift(); // dequeue O(n) (O(1) impl firefox)
  _queue_.dequeue = function() { return this.shift(); };
!queue.length; // isEmpty O(1)
  _queue_.isEmpty = function() { return !this.length; };
queue[0]; // peek O(1)
  _queue_.peek = function() { return this[0]; };

///////////////////////////
// STACK
//////////////////////////
let stack = [];
stack.push(); // push O(1)
stack.pop(); // pop O(1)
!stack.length; // isEmpty O(1)
  _stack_.isEmpty = function() { return !this.length; };
stack[stack.length - 1]; // peek O(1)
// replacements if you need to peek a lot
  const peek = s => s[s.length - 1]; // peek(stack) O(1)
  _stack_.peek = function() { return this[this.length - 1]; }; // stack.peek() O(1)
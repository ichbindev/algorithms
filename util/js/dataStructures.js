///////////////////////////
// ARRAY
//////////////////////////
let array = [];
array.push(); // append to end O(1)
array.pop(); // remove from end O(1)
array.shift(); // remove from beginning O(n) (O(1) impl firefox)
array.unshift(); // insert at beginning O(n)

array.map();
array.reduce();
array.forEach();
array.indexOf();
array.find();
array.findIndex();
array.some();
array.filter();
array.every();

///////////////////////////
// QUEUE
//////////////////////////
let queue = [];
queue.push(); // enqueue O(1)
queue.shift(); // dequeue O(n) (O(1) impl firefox)
!queue.length; // isEmpty O(1)
queue[0]; // peek O(1)

///////////////////////////
// STACK
//////////////////////////
let stack = [];
stack.push(); // push O(1)
stack.pop(); // pop O(1)
!stack.length; // isEmpty O(1)
stack[stack.length - 1]; // peek O(1)
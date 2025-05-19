/*
  You're given an array of integers where each integer represents a jump of its
  value in the array. For instance, the integer <span>2</span> represents a jump
  of two indices forward in the array; the integer <span>-3</span> represents a
  jump of three indices backward in the array.

  If a jump spills past the array's bounds, it wraps over to the other side. For
  instance, a jump of <span>-1</span> at index <span>0</span> brings us to the last index in
  the array. Similarly, a jump of <span>1</span> at the last index in the array brings us to
  index <span>0</span>.

  Write a function that returns a boolean representing whether the jumps in the
  array form a single cycle. A single cycle occurs if, starting at any index in
  the array and following the jumps, every element in the array is visited
  exactly once before landing back on the starting index.
*/
function hasSingleCycle(array) {
  let numVisited = 0;
  let nextIdx = 0;

  // two main conditions required for it to have a single cycle
  // 1: a cycle exists (it will get back to idx 0 eventually)
  // 2: it only has one cycle (it only visits 0 once in n moves, 
  //    and it will be back at 0 after exactly n moves)
  while(numVisited < array.length) {
    if (numVisited > 0 && nextIdx === 0) return false;
    numVisited++;
    
    nextIdx += array[nextIdx];
    nextIdx %= array.length;
    if (nextIdx < 0) nextIdx += array.length;
  }
  
  return nextIdx === 0;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;

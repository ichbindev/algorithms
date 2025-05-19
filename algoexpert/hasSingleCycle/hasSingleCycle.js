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
  const visited = new Array(array.length).fill(false);
  let nextIdx = 0;
  while(!visited[nextIdx]) {
    visited[nextIdx] = true;
    nextIdx += array[nextIdx];
    nextIdx %= array.length;
    if (nextIdx < 0) nextIdx += array.length;
  }
  return !nextIdx && visited.find(x => !x) === undefined;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;

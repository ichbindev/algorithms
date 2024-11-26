/*
  Write a function that takes in a non-empty, unordered <span>array</span> of
  positive integers and returns the array's majority element without sorting
  the array and without using more than constant space.

  An array's majority element is an element of the array that appears in over
  half of its indices. Note that the most common element of an array (the
  element that appears the most times in the array) isn't necessarily the
  array's majority element; for example, the arrays
  <span>[3, 2, 2, 1]</span> and <span>[3, 4, 2, 2, 1]</span> both have
  <span>2</span> as their most common element, yet neither of these arrays
  have a majority element, because neither <span>2</span> nor any other
  element appears in over half of the respective arrays' indices.

  You can assume that the input array will always have a majority element.
*/

function majorityElement(array) {
  let count = 0;
  let candidate;
  for (number of array) {
    // count starts at 0
    // if we ever get below 0, under half of the 
    // elements SO FAR are the candidate
    // but nothing else has been over half either
    // so consider the sub array of what's left
    // that will still have a majority element
    // which will end with count > 0
    if (count === 0) {
      candidate = number;
    }
    if (number === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

// Do not edit the line below.
exports.majorityElement = majorityElement;

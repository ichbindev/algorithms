/*
Given an infinite sorted array (or an array with unknown size), find if a 
given number ‘key’ is present in the array. Write a function to return the 
index of the ‘key’ if it is present in the array, otherwise return -1.

Since it is not possible to define an array with infinite (unknown) size, 
you will be provided with an interface ArrayReader to read elements of the array. 
ArrayReader.get(index) will return the number at index; if the array’s size is 
smaller than the index, it will return Integer.MAX_VALUE.

Constraints:
- 1 <= reader.length <= 10^4
- -10^4 <= reader[i], target <= 10^4
- reader is sorted in a strictly increasing order.
*/

/*class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) {
      return Infinity;
    }
    return this.arr[index];
  }
}*/


class Solution {

  searchInfiniteSortedArray(reader, key) {
    let start = 0,
        end = 1;

    while(reader.get(end) < key) {
      start = end + 1;
      end *= 2;
    }

    while (start <= end && end !== Infinity) {
      const mid = Math.floor(start + (end - start) / 2);
      if (reader.get(mid) > key) {
        end = mid - 1;
      } else if (reader.get(mid) < key) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
    
    return -1;
  }
}

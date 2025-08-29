/*
Given an array of lowercase letters sorted in ascending order, 
find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last 
letter is assumed to be connected with the first letter. This also means 
that the smallest letter in the given array is greater than the last letter 
of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Constraints:
- 2 <= letters.length <= 1^04
- letters[i] is a lowercase English letter.
- letters is sorted in non-decreasing order.
- letters contains at least two different characters.
- key is a lowercase English letter.
*/

class Solution {
  searchNextLetter(letters, key) {
console.log(letters, key)
    let start = 0,
        end = letters.length - 1;

    if (key >= letters[end]) return letters[0];
    
    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2),
            char = letters[mid];
      if (key < char) {
        end = mid - 1;
      } else if (key > char) {
        start = mid + 1;
      } else {
        return letters[mid + 1];
      }
    }

    return letters[start];
  }
}

/*
Given a square binary matrix representing an image, we want to 
flip the image horizontally, then invert it.

To flip an image horizontally means that each row of the image is 
reversed. For example, flipping [0, 1, 1] horizontally results in [1, 1, 0].

To invert an image means that each 0 is replaced by 1, and each 1 
is replaced by 0. For example, inverting [1, 1, 0] results in [0, 0, 1].

Constraints:
- n == arr.length
- n == arr[i].length
- 1 <= n <= 20
- arr[i][j] is either 0 or 1.
*/

class Solution {
  flipAndInvertImage(matrix) {
    matrix.forEach((row) => {
      const r = row.length - 1;
      for (let i = 0; i <= r / 2; i++) {
        [row[i], row[r - i]] = [row[r - i] ^ 1, row[i] ^ 1];
      }
    });
    return matrix;
  }
}

class Solution {
  makeSquares(arr) {
    const n = arr.length;
    let squares = Array(n).fill(0);
    let left = 0, right = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (Math.abs(arr[left]) >= Math.abs(arr[right])) {
        squares[i] = arr[left] * arr[left];
        left++;
      } else {
        squares[i] = arr[right] * arr[right];
        right--;
      }
    }
    return squares;
  }
}

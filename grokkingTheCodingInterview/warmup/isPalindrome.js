/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
class Solution {
  isPalindrome(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let start = 0, end = str.length - 1;
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
    }
    return true;
  }
}

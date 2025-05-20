/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
class Solution {
  isPalindrome(s) {
    let start = 0, end = s.length - 1;
    while (start < end) {
      // checking for non-alphanumeric characters here instead of preprocessing
      // a little (not much) slower but more space efficient, saving an O(n) var
      if (!s[start].match(/^[a-z0-9]+$/i)) {
        start++;
        continue;
      }
      if (!s[end].match(/^[a-z0-9]+$/i)) {
        end--;
        continue;
      }
      if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
      start++;
      end--;
    }
    return true;
  }
}

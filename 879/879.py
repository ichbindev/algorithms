# Write a function that reverses a string. The input string is given as an array of characters s.

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        b, e = 0, len(s) - 1
        while b <= e:
            temp = s[b]
            s[b] = s[e]
            s[e] = temp
            b += 1
            e -= 1

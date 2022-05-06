# Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

class Solution:
    def firstUniqChar(self, s: str) -> int:
        counts = {}
        
        # fill in dict with count of chars
        for c in s:
            if c in counts:
                counts[c] = counts[c] + 1
            else:
                counts[c] = 1
                
        # find first char with count of 1
        for i in range(len(s)):
            if counts[s[i]] == 1:
                return i
            
        return -1

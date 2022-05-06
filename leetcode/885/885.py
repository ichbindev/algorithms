class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        h, n = len(haystack), len(needle)
        # edgecase checks
        if n == 0:
            return 0
        if n > h:
            return -1
        if n == h:
            return 0 if needle == haystack else -1
        
        # match up to len(needle) characters keeping track of start
        # if you run out of characters to check then there is no match
        i, c = 0, 0 
        while i < h and c < n:
            if haystack[i] == needle[c]:
                c += 1
            elif c > 0:
                i = i - c
                c = 0
            i += 1
        
        return i - c if c == n else -1

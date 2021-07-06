class Solution:
    def isPalindrome(self, s: str) -> bool:
        # remove non-letter characters and make lower case
        possiblePalindrome = self.formatString(s)
        
        # test if palindrome in max n/2 steps
        return self.checkPalindrome(possiblePalindrome)
    
    def formatString(self, s: str) -> str:
        exclude = set(string.punctuation)
        exclude.add(' ')
        formatted = ''.join(ch for ch in s if ch not in exclude)
        formatted = formatted.lower()
        return formatted
    
    def checkPalindrome(self, s: str) -> bool:
        b, e = 0, len(s) - 1
        while b <= e:
            if s[b] != s[e]:
                return False
            b += 1
            e -= 1
        return True

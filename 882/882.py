class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        # convert both strings to dictionaries of character: count
        sDict: dict = self.stringToDict(s)
        tDict: dict = self.stringToDict(t)
        # check that the dictionaries contain the same letters
        return self.dictsAreEqual(sDict, tDict)
        
    def stringToDict(self, s: str) -> dict:
        dic = {}
        for c in s:
            if c not in dic:
                dic[c] = 1
            else:
                dic[c] = dic[c] + 1
    
    def dictsAreEqual(self, s: str, t: str) -> bool:
        for c in s:
            if c not in t:
                return False
            if s[c] != t[c]:
                return False
        return True

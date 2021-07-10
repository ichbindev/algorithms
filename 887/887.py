class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        currentPrefix = strs[0]
        for i in range(1, len(strs)):
            currentPrefix = self.commonPrefix(currentPrefix, strs[i])
        return currentPrefix
        
    def commonPrefix(self, s1: str, s2: str) -> str:
        shortestLen = min([len(s1), len(s2)])
        prefix = ''
        for i in range(shortestLen):
            if s1[i] == s2[i]:
                prefix += s1[i]
            else:
                return prefix
        return prefix

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n: int) -> int:
        """
        You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
        """
        # basically gonna do git bisect but with version #s
        # binary search thru the versions, finding the first bad one
        start = 1
        end = n
        while start < end:
            pivot = end + (start - end) // 2
            # if bad, go left
            # if good, go right
            if isBadVersion(pivot):
                end = pivot
            else:
                start = pivot + 1
        return start
        

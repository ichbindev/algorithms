"""
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
"""

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        if n == 0: return
        # three pointers, two to keep track of location in arrays
        # one for where we are writing in the first array
        p1, p2 = m - 1, n - 1
        write = m + n - 1
        
        # iterate backwards, fill in array with largest remaining element
        # starting at the end of the first array
        while write >= 0:
            n1, n2 = nums1[p1], nums2[p2]

            if p2 < 0 or (p1 >= 0 and n1 > n2):
                nums1[write] = n1
                p1 -= 1
            else:
                nums1[write] = n2
                p2 -= 1

            write -= 1

# Given an array, rotate the array to the right by k steps, where k is non-negative.

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums)
        self.reverse(nums, 0, len(nums) - 1)
        self.reverse(nums, 0, k - 1)
        self.reverse(nums, k, len(nums) - 1)
        
    def reverse(self, nums: List[int], start, end):
        while start < end:
            swap = nums[start]
            nums[start] = nums[end]
            nums[end] = swap
            start += 1
            end -= 1

''' 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
'''
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        z = 0
        if len(nums) < 2:
            return
        for i in range(len(nums)):
            if nums[i] == 0:
                if z < i:
                    z = i
                z = self.find_next_non_zero(nums, z)
                if z != 0 and z < len(nums):
                    nums[i] = nums[z]
                    nums[z] = 0
                
                
    def find_next_non_zero(self, nums: List[int], index: int) -> int:
        while index < len(nums) and nums[index] == 0:
            index += 1
        return index

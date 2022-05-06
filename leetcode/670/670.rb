=begin
Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
=end

class Solution

=begin
    :type nums: Integer[]
=end
    def initialize(nums)
        @cached_nums = nums
        @nums = Array.new(nums)
    end

=begin
    Resets the array to its original configuration and return it.
    :rtype: Integer[]
=end
    def reset()
        @nums = Array.new(@cached_nums)
    end

=begin
    Returns a random shuffling of the array.
    :rtype: Integer[]
=end
    def shuffle()
        last_index = @nums.length - 1
        (0..last_index).reverse_each do |index|
           rand_num = rand(0..index)
           @nums[index], @nums[rand_num] = @nums[rand_num], @nums[index]
        end
    @nums
    end

end

# Your Solution object will be instantiated and called as such:
# obj = Solution.new(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()

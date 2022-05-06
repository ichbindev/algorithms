# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    dict = {}
    for i in 0..nums.length do
        letter = nums[i]
        if dict.key?(letter)
            return true
        end
        dict[letter] = 1
    end
    
    return false
end

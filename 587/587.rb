=begin
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n
=end

# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
    return if n == 0
    # iterate backwards with three pointers
    # place the largest element at the trailing pointer in nums1
    p1, p2 = m - 1, n - 1
    place = m + n - 1
    while place >= 0
        v1, v2 = nums1[p1], nums2[p2]
        if p1 >=0 && v1 >= v2 || p2 < 0
            nums1[place] = v1
            p1 -= 1
        else
            nums1[place] = v2
            p2 -= 1
        end
        place -= 1
    end
end


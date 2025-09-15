/*
Determine the minimum number of deletions required to remove the smallest 
and the largest elements from an array of integers.

In each deletion, you are allowed to remove either the first (leftmost) or 
the last (rightmost) element of the array.

Constraints:
- 1 <= nums.length <= 10^5
- -10^5 <= nums[i] <= 10^5
- The integers in nums are distinct.
*/
class Solution {
    minMoves(nums) {
        let smallestIdx = nums.indexOf(Math.min(...nums)),
            largestIdx = nums.indexOf(Math.max(...nums)),
            len = nums.length;

        const minStart = smallestIdx + 1,
              minEnd = len - smallestIdx,
              maxStart = largestIdx + 1,
              maxEnd = len - largestIdx;

        const bothFromStart = Math.max(minStart, maxStart),
              bothFromEnd = Math.max(minEnd, maxEnd),
              bothEnds = Math.min(minStart, maxStart) + Math.min(minEnd, maxEnd);

        return Math.min(
                        bothFromStart,
                        bothFromEnd,
                        bothEnds
                    );
    }
}


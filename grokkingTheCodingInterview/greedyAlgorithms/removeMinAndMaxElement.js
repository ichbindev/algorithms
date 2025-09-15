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
            moves = 0,
            len = nums.length;

        if (len <= 2) return len;

        while (smallestIdx >= 0 && smallestIdx < len || 
               largestIdx >= 0 && largestIdx < len) {
            const halves = this.findHalves(smallestIdx, largestIdx, len);
            if (halves[0] > halves[1]) { // remove beginning 
                smallestIdx--;
                largestIdx--;
            } 

            len--;
            moves++;
        }

        return moves;
    }

    findHalves(i1, i2, len) {
        const halves = [0, 0];
        if (i1 >= 0 && i1 < len / 2) halves[0]++;
        else if (i1 < len && i1 > len / 2) halves[1]++;
        if (i2 >= 0 && i2 < len / 2) halves[0]++;
        else if (i2 < len && i2 > len / 2) halves[1]++;
        return halves;
    }
}


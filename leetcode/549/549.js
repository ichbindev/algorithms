/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let bitHackNumber = 0;
    
    for (let num of nums) {
        bitHackNumber ^= num;
    }
    return bitHackNumber;
};

/*
Note: I remembered this xor stuff from last time I did this, no way I'd come up with it on my own. Frustrating that it says you "must implement a solution with ... only constant extra space" and it's impossible to do it without bit hacks. I'd never write this for production code, it's just begging to be broken since it's opaque. But it saves some memory ¯\_(ツ)_/¯ 
*/

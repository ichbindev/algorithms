/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
*/
function majorityElement(nums: number[]): number[] {
    const threshold = nums.length / 3;
    let counts: {[key:string]: number} = nums.reduce((count, num) => {
        if (!count[num]) count[num] = 0;
        ++count[num];
        return count;
    }, {});
    
    return Object.keys(counts).filter(num => counts[num] > threshold).map(s => Number(s));
};

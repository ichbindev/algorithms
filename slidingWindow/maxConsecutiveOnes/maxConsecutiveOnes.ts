function longestOnes(nums: number[], k: number): number {
    let start = 0,
        onesInWindow = 0,
        maxLength = 0;
    
    for (let end = 0; end < nums.length; end++) {
        nums[end] === 1 && ++onesInWindow;
        
        while (end - start + 1 - onesInWindow > k) {
            nums[start] === 1 && --onesInWindow;
            ++start;
        }
        
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};

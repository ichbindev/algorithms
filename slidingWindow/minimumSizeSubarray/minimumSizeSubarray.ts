function minSubArrayLen(target: number, nums: number[]): number {
    let sum = 0,
        minLength = Infinity,
        start = 0;
    
    // sliding window
    for (let i = 0; i < nums.length; i++) {
        // add to the sum
        sum += nums[i];
        
        // check the size and minimize the window size
        while (sum >= target) {
            const currentLength = i - start + 1;
            minLength = Math.min(minLength, currentLength);
            sum -= nums[start];
            start++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
};

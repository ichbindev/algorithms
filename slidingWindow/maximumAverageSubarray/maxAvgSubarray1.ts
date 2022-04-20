function findMaxAverage(nums: number[], k: number): number {
    let maxAverage = -Infinity;
    let sum = 0;
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= k - 1) {
            const average = sum / k;
            if (average > maxAverage) {
                maxAverage = average;
            }
            sum -= nums[start];
            start++;
        }
    }
    return maxAverage;
};

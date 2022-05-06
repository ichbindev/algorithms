/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
*/
function majorityElement(nums: number[]): number[] {
    let num1 = 0,
        count1 = 0,
        num2 = 0, 
        count2 = 0;
    
    // boyer moore voting algorithm with 2 candidates
    for (let num of nums) {
        if (num === num1) {
            ++count1;
        } else if (num === num2) {
            ++count2;
        }
        else if (count1 === 0) {
            num1 = num;
            ++count1;
        } else if (count2 === 0) {
            num2 = num;
            ++count2;
        } else {
            --count1;
            --count2;
        }
    }
    
    // verify each candidate appears more than n/3 times
    count1 = 0;
    count2 = 0;
    nums.forEach(num => {
        num === num1 && ++count1;
        num === num2 && ++count2;
    });
    
    const result = [],
          threshold = nums.length / 3;;
    count1 > threshold && result.push(num1);
    num1 !== num2 && count2 > threshold && result.push(num2);
    
    return result;
};

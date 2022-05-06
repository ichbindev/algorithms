/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    // O(n) solution
    // get the sum, min and max in one pass
    let min = salary[0], max = salary[0], sum = 0;
    for (let i = 0; i < salary.length; i++) {
        const num = salary[i];
        if (num < min) min = num;
        if (num > max) max = num;
        sum += num;
    }
    // remove min and max, calculate average
    const normalized = sum - max - min;
    return normalized / (salary.length - 2);
    
    // O(nlogn) solution, sort and remove ends
    // slower but more readable IMO
    salary.sort((a, b) => a - b);
    salary = salary.splice(1, salary.length - 2)
    const normalized = salary.reduce((a, v) => a + v, 0);
    return normalized / (salary.length);
};

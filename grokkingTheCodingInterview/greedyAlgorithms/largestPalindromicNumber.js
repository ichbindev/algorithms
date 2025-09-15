/*

Given a string s containing 0 to 9 digits, create the largest possible 
palindromic number using the string characters. It should not contain 
leading zeroes.

A palindromic number reads the same backward as forward.

If it's not possible to form such a number using all digits of the given 
string, you can skip some of them.

Constraints:
- 1 <= num.length <= 10^5
- num consists of digits.
*/
class Solution {
    largestPalindromic(num) {
        const counts = num.split('').reduce((a, c) => {
            a[c] = a[c] + 1;
            return a;
        }, new Array(10).fill(0));
        let largestSingleton = '',
            result = '';

        if (counts[0] === num.length) return '0';
        else if (counts[0] === num.length - 1) 
            return counts.findIndex(x => x === 1).toString();
            
        for (let i = 9; i >= 0; i--) {
            let count = counts[i];
            if (count >= 2) {
                while (count > 1) {
                    result += i;
                    count -= 2;
                }
            } 
            if (count === 1 && !largestSingleton) largestSingleton = i;
        }
        

        return result + largestSingleton + [...result].reverse().join('');
    }
}


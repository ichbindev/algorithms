/*
    Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

    The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

    You may assume the integer does not contain any leading zero, except the number 0 itself.
    */

    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    var plusOne = function(digits) {
        let index = digits.length - 1, 
            carryOver = true;

        // loop backwards through the array, stop when you reach the beginning 
        // or have completed your increment
        while (index >= 0 && carryOver) {
            // add one to the last element and make it a single digit
            let currentNumber = digits[index];
            currentNumber = ++currentNumber % 10;
            digits[index] = currentNumber;

            // carry the 1 if you ended up with 10
            carryOver = !currentNumber;
            index--;
        } // account for remaining carryover
        if (carryOver) digits.unshift(1);

        return digits;
    };

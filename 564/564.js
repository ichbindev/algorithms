/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let index = 0, lowest = prices[0], highest = prices[0], profit = 0;
    while (inBounds(index, prices)) {
        // find local low, buy here
        while (prices[index] >= prices[index + 1] && inBounds(index, prices)) {
            index++;
        }
        lowest = prices[index];
        
        // find local high, sell here
        while (prices[index] <= prices[index + 1] && inBounds(index, prices)) {
               index++;
        }
        highest = prices[index];
        
        // take your gains
        profit += highest - lowest;
    }
    return profit;
};
    
function inBounds(index, array) {
    // check for length - 1 since we check index + 1 in our loops
    return index < array.length - 1;
}

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
function maxProfit(prices: number[]): number {
    let cheapest = prices[0],
        maxProfit = 0;
    
    prices.forEach(price => {
        cheapest = Math.min(cheapest, price);
        maxProfit = Math.max(maxProfit, price - cheapest);
    });
    
    return maxProfit;
};
